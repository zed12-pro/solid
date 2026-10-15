import Navbar from "@/components/Navbar";
import AIChat from "@/components/AIChat";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-gray-950 transition-colors">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            About Me
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Ask me anything — an AI trained on my information will answer
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Zelalem Assefa
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I’m a Fullstack Developer and passion for creating web applications that are not only functional but also provide a seamless user experience.
            I specialize in building fast, scalable, and modern web applications 
            using React, Next.js, TypeScript, Node.js, mysql and PostgreSQL.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            I love turning ideas into real products. Whether it’s an e-commerce platform, 
            a data tracking system, or a community forum — I focus on clean code, 
            great performance, and excellent user experience.
          </p>
        </div>

        {/* AI Chat */}
        <AIChat />
      </section>
    </main>
  );
}