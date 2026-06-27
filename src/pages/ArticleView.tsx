import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import Footer from '../components/Footer';

// This acts as our temporary database of articles
const articlesData = {
  "heart-of-darkness": {
    title: "Heart of Darkness: A Postcolonial Analysis",
    category: "Academic Research",
    date: "Spring 2024",
    readTime: "12 min read",
    content: `
      <h2>Introduction</h2>
      <p>Joseph Conrad's <em>Heart of Darkness</em> stands as one of the most rigorously analyzed texts of the twentieth century. While early critics focused on its psychological dimensions, subsequent postcolonial analysis has revealed the deep imperialistic structures embedded within its narrative framework.</p>
      
      <h2>The Illusion of the Civilizing Mission</h2>
      <p>Marlow's journey into the Congo serves as an unraveling of the European "civilizing mission." The rhetoric of bringing light to the dark places of the earth is systematically dismantled through the depiction of the Outer, Central, and Inner stations, where inefficiency, cruelty, and greed reign supreme.</p>
      
      <blockquote>
        "The conquest of the earth, which mostly means the taking it away from those who have a different complexion or slightly flatter noses than ourselves, is not a pretty thing when you look into it too much."
      </blockquote>
      
      <h2>Kurtz as the Embodiment of Europe</h2>
      <p>All of Europe contributed to the making of Kurtz. He is the ultimate product of European enlightenment ideals pushed to their colonial extreme. His descent into madness is not a result of the African environment, but rather the removal of European societal constraints, revealing the inherent darkness of the imperial project itself.</p>
      
      <h2>Conclusion</h2>
      <p>The true "Heart of Darkness" is not the African interior, but the center of the imperial enterprise. Conrad's novella, despite its own problematic representations of African peoples, remains a powerful critique of the devastating effects of colonial exploitation on both the colonized and the colonizer.</p>
    `
  },
  "ai-language-acquisition": {
    title: "The Role of AI in Modern Language Acquisition",
    category: "EdTech",
    date: "Jan 2025",
    readTime: "8 min read",
    content: `
      <h2>The Shift in Pedagogy</h2>
      <p>Language learning has historically been constrained by the availability of native speakers and qualified instructors. With the advent of Large Language Models (LLMs), we are witnessing a paradigm shift in how students achieve C1 and C2 proficiency levels.</p>
      
      <h2>Automated Conversational Feedback</h2>
      <p>One of the most significant breakthroughs is the ability of AI to provide immediate, context-aware conversational feedback. Unlike traditional rote-learning software, AI can simulate nuanced, free-flowing dialogue while simultaneously analyzing grammatical structures, vocabulary usage, and even tone.</p>
      
      <h2>Personalized Curriculum Generation</h2>
      <p>At Abyssal Academy, we leverage these tools to generate dynamic curricula. If a student struggles with past perfect continuous tenses in a conversational setting, the AI automatically weaves those structures into future reading and listening exercises, creating a highly customized learning loop.</p>
      
      <h2>The Irreplaceable Human Element</h2>
      <p>While AI excels at mechanical feedback and immersion simulation, the human teacher remains crucial. Empathy, cultural nuance, and the emotional intelligence required to motivate a struggling student are areas where human educators will continually outshine algorithms. The future of EdTech is not replacement, but symbiotic enhancement.</p>
    `
  },
  "scalable-platforms-nextjs": {
    title: "Building Scalable Platforms with Next.js",
    category: "Software Engineering",
    date: "Dec 2024",
    readTime: "15 min read",
    content: `
      <h2>Why Next.js?</h2>
      <p>When architecting Abyssal Academy, the choice of framework was critical. We needed a solution that offered SEO benefits for marketing pages, fast static generation for curriculum content, and robust server-side rendering for user dashboards. Next.js provided the perfect hybrid approach.</p>
      
      <h2>App Router & React Server Components</h2>
      <p>The transition to the App Router fundamentally changed how we fetch data. By leveraging React Server Components, we drastically reduced the JavaScript bundle size shipped to the client, pushing heavy data processing and database queries securely to the server.</p>
      
      <h2>State Management & Authentication</h2>
      <p>Handling user sessions in a learning management system requires strict security. We utilized middleware to protect routes, ensuring that students only access materials they are enrolled in, while administrators have full view over real-time KPIs and analytics.</p>
      
      <h2>Conclusion</h2>
      <p>Building a scalable platform is about making the right trade-offs. Next.js, combined with a robust database architecture and edge caching, allowed us to deliver an ultra-fast, reliable experience to students globally.</p>
    `
  }
};

const ArticleView = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug && (articlesData as any)[slug]) {
      setArticle((articlesData as any)[slug]);
    } else {
      // Handle 404 or redirect
      setArticle({
        title: "Article Not Found",
        category: "Error",
        date: "N/A",
        readTime: "0 min",
        content: "<p>The requested article could not be found.</p>"
      });
    }
  }, [slug]);

  if (!article) return <div className="min-h-screen bg-black" />;

  return (
    <>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[200]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 bg-black z-0 pointer-events-none"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Minimal Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-4xl mx-auto px-6 w-full flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            <div className="text-lg font-black tracking-tighter text-white">
              YASSIR<span className="text-primary-500">.</span>
            </div>
          </div>
        </header>

        {/* Article Header */}
        <main className="flex-grow max-w-3xl mx-auto w-full px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-semibold tracking-wider uppercase mb-6">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-8">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 border-t border-b border-white/5 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  YG
                </div>
                <span className="font-medium text-neutral-300">Yassir Gattoa</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <button className="ml-auto flex items-center gap-2 hover:text-white transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-blockquote:border-primary-500 prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-neutral-200"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ArticleView;
