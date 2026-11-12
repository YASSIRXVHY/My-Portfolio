import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const articlesData: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  'heart-of-darkness': {
    title: 'Heart of Darkness: A Postcolonial Analysis',
    category: 'Academic Research',
    date: 'Spring 2024',
    readTime: '12 min read',
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
    `,
  },
  'ai-language-acquisition': {
    title: 'The Role of AI in Modern Language Acquisition',
    category: 'EdTech',
    date: 'Jan 2025',
    readTime: '8 min read',
    content: `
      <h2>The Shift in Pedagogy</h2>
      <p>Language learning has historically been constrained by the availability of native speakers and qualified instructors. With the advent of Large Language Models (LLMs), we are witnessing a paradigm shift in how students achieve C1 and C2 proficiency levels.</p>

      <h2>Automated Conversational Feedback</h2>
      <p>One of the most significant breakthroughs is the ability of AI to provide immediate, context-aware conversational feedback. Unlike traditional rote-learning software, AI can simulate nuanced, free-flowing dialogue while simultaneously analyzing grammatical structures, vocabulary usage, and even tone.</p>

      <h2>Personalized Curriculum Generation</h2>
      <p>At Abyssal Academy, we leverage these tools to generate dynamic curricula. If a student struggles with past perfect continuous tenses in a conversational setting, the AI automatically weaves those structures into future reading and listening exercises, creating a highly customized learning loop.</p>

      <h2>The Irreplaceable Human Element</h2>
      <p>While AI excels at mechanical feedback and immersion simulation, the human teacher remains crucial. Empathy, cultural nuance, and the emotional intelligence required to motivate a struggling student are areas where human educators will continually outshine algorithms. The future of EdTech is not replacement, but symbiotic enhancement.</p>
    `,
  },
  'scalable-platforms-nextjs': {
    title: 'Building Scalable Platforms with Next.js',
    category: 'Software Engineering',
    date: 'Dec 2024',
    readTime: '15 min read',
    content: `
      <h2>Why Next.js?</h2>
      <p>When architecting Abyssal Academy, the choice of framework was critical. We needed a solution that offered SEO benefits for marketing pages, fast static generation for curriculum content, and robust server-side rendering for user dashboards. Next.js provided the perfect hybrid approach.</p>

      <h2>App Router & React Server Components</h2>
      <p>The transition to the App Router fundamentally changed how we fetch data. By leveraging React Server Components, we drastically reduced the JavaScript bundle size shipped to the client, pushing heavy data processing and database queries securely to the server.</p>

      <h2>State Management & Authentication</h2>
      <p>Handling user sessions in a learning management system requires strict security. We utilized middleware to protect routes, ensuring that students only access materials they are enrolled in, while administrators have full view over real-time KPIs and analytics.</p>

      <h2>Conclusion</h2>
      <p>Building a scalable platform is about making the right trade-offs. Next.js, combined with a robust database architecture and edge caching, allowed us to deliver an ultra-fast, reliable experience to students globally.</p>
    `,
  },
};

const ArticleView = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<
    { title: string; category: string; date: string; readTime: string; content: string } | null
  >(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug && articlesData[slug]) {
      setArticle(articlesData[slug]);
    } else {
      setArticle({
        title: 'Article not found',
        category: 'Error',
        date: '—',
        readTime: '0 min',
        content: '<p>The page you are looking for does not exist. <a href="/">Back to the portfolio.</a></p>',
      });
    }
  }, [slug]);

  if (!article) {
    return <div className="min-h-screen bg-paper" />;
  }

  return (
    <>
      <div className="paper-grain" aria-hidden="true" />

      {/* Reading progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-pen origin-left z-[70]"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm hairline-b">
        <div className="container-page flex items-center justify-between h-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-soft hover:text-pen transition-colors"
          >
            <ArrowLeft size={15} />
            Back to the portfolio
          </Link>
          <span className="font-display italic font-semibold text-xl text-ink">Yassir Gattoa</span>
        </div>
      </header>

      <main className="container-page max-w-3xl py-16 sm:py-24 flex-grow">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="kicker text-pen">{article.category}</span>
          <h1 className="headline text-4xl sm:text-5xl lg:text-[3.4rem] text-ink mt-4 mb-8">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 hairline-t hairline-b py-4 mb-12 font-mono text-xs tracking-wide text-ink-soft">
            <span className="font-semibold text-ink">Yassir Gattoa</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="prose-paper"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </main>

      <Footer />
    </>
  );
};

export default ArticleView;
