import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Matières Premières",
      description: "Ingrédient précieux sélectionnés auprès des meilleurs producteurs du monde entier."
    },
    {
      icon: Heart,
      title: "Savoir-Faire",
      tradition: "Méthodes traditionnelles de la parfumerie française, affinées depuis des générations."
    },
    {
      icon: Star,
      title: "Exclusivité",
      description: "Créations limitées et numérotées, pour une rareté absolue."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-luxury-gold/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-luxury-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-subtitle mb-4"
          >
            Notre Identité
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="section-title"
          >
            L'Art du <span className="italic text-gradient-gold">Temps</span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract composition */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-luxury-gold/10 rounded-full blur-[60px]"
              />
              
              {/* Decorative rings */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                <defs>
                  <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#E8D5A3" />
                  </linearGradient>
                </defs>
                
                {/* Outer ring */}
                <circle
                  cx="200" cy="200" r="180"
                  fill="none"
                  stroke="url(#ringGold)"
                  strokeWidth="0.5"
                  strokeDasharray="10 20"
                  className="opacity-30"
                />
                
                {/* Middle ring */}
                <circle
                  cx="200" cy="200" r="140"
                  fill="none"
                  stroke="url(#ringGold)"
                  strokeWidth="0.5"
                  className="opacity-40"
                />
                
                {/* Inner ring */}
                <circle
                  cx="200" cy="200" r="100"
                  fill="none"
                  stroke="url(#ringGold)"
                  strokeWidth="0.5"
                  className="opacity-50"
                />
                
                {/* Center dot */}
                <circle cx="200" cy="200" r="8" fill="#D4AF37" className="opacity-60" />
                
                {/* Cross lines */}
                <line x1="200" y1="20" x2="200" y2="50" stroke="#D4AF37" strokeWidth="0.5" className="opacity-30" />
                <line x1="200" y1="350" x2="200" y2="380" stroke="#D4AF37" strokeWidth="0.5" className="opacity-30" />
                <line x1="20" y1="200" x2="50" y2="200" stroke="#D4AF37" strokeWidth="0.5" className="opacity-30" />
                <line x1="350" y1="200" x2="380" y2="200" stroke="#D4AF37" strokeWidth="0.5" className="opacity-30" />
              </svg>
              
              {/* Quote */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center p-8"
                >
                  <p className="font-serif text-2xl text-white/80 italic leading-relaxed mb-4">
                    "Chaque parfum raconte une histoire"
                  </p>
                  <p className="text-xs tracking-[0.3em] text-luxury-gold uppercase">
                    depuis 2024
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white/50 leading-relaxed text-lg font-light"
              >
                L'Essence est née d'une vision simple mais audacieuse : créer des fragrances
                qui transcendent le temps et l'espace. Chaque parfum est une invitation à
                un voyage olfactif unique, une promesse d'évasion et d'émotion.
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-luxury-gold/40 transition-colors duration-500">
                    <feature.icon className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white mb-1 group-hover:text-luxury-gold transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/40 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <p className="font-serif text-3xl text-luxury-gold">8</p>
                <p className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Créations</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-luxury-gold">∞</p>
                <p className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Passion</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-luxury-gold">100%</p>
                <p className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Artisanales</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
