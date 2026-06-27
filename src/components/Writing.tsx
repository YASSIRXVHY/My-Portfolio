import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const articles = [
    {
      title: "Heart of Darkness: A Postcolonial Analysis",
      description: "An in-depth academic essay exploring the underlying themes of imperialism, madness, and the human condition in Joseph Conrad's seminal work.",
      date: "Spring 2024",
      category: "Academic Research",
      readTime: "12 min read",
      slug: "heart-of-darkness"
    },
    {
      title: "The Role of AI in Modern Language Acquisition",
      description: "Examining how Large Language Models and automated feedback systems are revolutionizing the way non-native speakers acquire C1 level proficiency.",
      date: "Jan 2025",
      category: "EdTech",
      readTime: "8 min read",
      slug: "ai-language-acquisition"
    },
    {
      title: "Building Scalable Platforms with Next.js",
      description: "Technical deep-dive into the architectural decisions made while developing the Abyssal Academy LMS platform.",
      date: "Dec 2024",
      category: "Software Engineering",
      readTime: "15 min read",
      slug: "scalable-platforms-nextjs"
    }
  ];

  return (
    <section id="writing" className="py-24 bg-black relative overflow-hidden border-t border-white/5 z-10">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Writing & Research.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 relative z-10 max-w-6xl">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/article/${article.slug}`} className="block h-full">
                <div className="glass-card glass-card-hover p-8 h-full flex flex-col border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Hover effect gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                      {article.category}
                    </span>
                    <span className="text-neutral-500 text-xs font-medium flex items-center gap-1.5">
                      <BookOpen size={14} />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-white mb-4 leading-snug group-hover:text-primary-300 transition-colors relative z-10">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8 relative z-10">
                    {article.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between text-neutral-500 relative z-10 pt-6 border-t border-white/5">
                    <span className="text-xs font-medium">{article.date}</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
