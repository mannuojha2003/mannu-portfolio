import React, { useEffect, useRef } from 'react';

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      width: number;
      height: number;
      speedX: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.width = Math.random() * 150 + 10;
        this.height = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 30; // Fast horizontal movement
        
        const colors = ['#00F0FF', '#FF003C', '#FCEE0A', '#111111'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.maxLife = Math.random() * 50 + 10;
        this.life = this.maxLife;
      }

      update() {
        this.x += this.speedX;
        this.life--;

        if (this.x > canvas!.width) this.x = -this.width;
        else if (this.x + this.width < 0) this.x = canvas!.width;
        
        if (this.life <= 0) {
          this.x = Math.random() * canvas!.width;
          this.y = Math.random() * canvas!.height;
          this.life = this.maxLife;
        }
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = this.life / this.maxLife * 0.7; // Fade out
        ctx!.fillRect(this.x, this.y, this.width, this.height);
        ctx!.globalAlpha = 1.0;
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Trailing effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-40"
    />
  );
};

export default BackgroundParticles;
