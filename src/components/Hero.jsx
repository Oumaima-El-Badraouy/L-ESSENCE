import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden ">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)',
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#030303] to-[#0a0a0a]"
        />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-luxury-gold/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-luxury-gold/8 rounded-full blur-[80px]"
        />
        
        {/* Particles */}
        <AnimatedBackground />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#D4AF37" strokeWidth="0.3"/>
            </pattern>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtitle with animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >

          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mt-16 tracking-tight"
          >
            L'<span className="italic bg-gradient-to-r from-luxury-gold via-luxury-goldLight to-luxury-gold bg-clip-text text-transparent">
              Essence
            </span>
            <br />
            <span className="text-white/90">du Luxe</span>
          </motion.h1>

          {/* Decorative quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-lg md:text-xl text-white/50 italic max-w-2xl mx-auto mb-4"
          >
            "L'art de capturer l'émotion dans un flacon"
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xs tracking-[0.3em] text-luxury-gold/60 uppercase mb-12"
          >
            Paris • Depuis 2024
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="collections" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-luxury-gold via-luxury-goldLight to-luxury-gold bg-[length:200%_100%] text-[#050505] font-semibold tracking-[0.15em] uppercase rounded-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Découvrir la Collection
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </Link>
            
            <Link to="about" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border border-white/20 text-white/70 font-medium tracking-[0.15em] uppercase rounded-lg hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
              >
                Notre Histoire
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats / Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center justify-center gap-12 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: '24+', label: 'Créations' },
              { value: '100%', label: 'Artisanal' },
              { value: '∞', label: 'Passion' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-2xl text-luxury-gold">{stat.value}</p>
                <p className="text-xs tracking-[0.2em] text-white/40 uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
