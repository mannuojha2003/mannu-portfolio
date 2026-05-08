const { create } = require('@open-wa/wa-automate');
const { exec } = require('child_process');
const path = require('path');
const cron = require('node-cron');

create().then(client => start(client));

function start(client) {
  console.log("✅ WhatsApp bot started.");

  client.onMessage(async message => {
    console.log("Received from:", message.chat.name, "| ID:", message.chat.id);
    if (message.type === 'chat' && message.body) {
      const safeText = message.body.replace(/"/g, '\\"');
      const pythonScript = path.resolve(__dirname, '../backend/whatsapp_parser.py');

      exec(`python "${pythonScript}" "${safeText}"`, (err, stdout, stderr) => {
        console.log("STDOUT:", stdout);
        console.log("STDERR:", stderr);
        if (err) {
          client.sendText(message.from, "❌ Error saving data.");
        } else {
          const reply = stdout.includes("Success")
            ? "✅ Data saved. Thank you!"
            : "⚠️ Could not parse. Please check format.";
          client.sendText(message.from, reply);
        }
      });
    }
  });

  cron.schedule('0 21 * * *', () => {
    const summaryScript = path.resolve(__dirname, '../backend/generate_summary.py');
    exec(`python "${summaryScript}"`, (err, stdout, stderr) => {
      if (!err && stdout.trim()) {
        const summary = stdout.trim();
        client.sendText("120363196294448521@g.us", summary);
        client.sendText("120991198821244321@g.us", summary);
      }
    });
  });
}
