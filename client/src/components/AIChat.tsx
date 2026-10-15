"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Zelalem's AI assistant. Ask me anything about his skills, projects, architecture, or how to contact him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 600));

    const reply = generateReply(userMessage.toLowerCase());

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button (Logo) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Open AI Chat"
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L13.09 8.26L19 7L14.74 11.26L21 12L14.74 12.74L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.74L3 12L9.26 11.26L5 7L10.91 8.26L12 2Z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                Zelalem AI Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg leading-none"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-bl-md text-sm text-gray-500">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about Zelalem..."
              className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Keyword replies ---------- */
/* ORDER MATTERS: specific questions first, general ones last. */

function generateReply(question: string): string {
  const has = (...words: string[]) => words.some((w) => question.includes(w));

  // 4. Why should I hire you?
  if (has("why should", "why hire", "why choose", "why pick", "hire you")) {
    return (
      "Here's why you should hire me:\n\n" +
      "• I cover the whole product: database, backend, and frontend, so you only need one developer\n" +
      "• I build systems that stay fast and consistent when many customers use them at once\n" +
      "• I write clean, tested code that is easy to maintain and grow\n" +
      "• I have a live, working marketplace you can test right now: https://injibara-market.vercel.app\n\n" +
      "Let's talk about your project: zelalemassefa726@gmail.com"
    );
  }

  // 1 & 2. What makes you unique / special / how will you help me
  if (
    has(
      "unique",
      "different",
      "stand out",
      "special",
      "use of you",
      "benefit",
      "help me",
      "value"
    )
  ) {
    return (
      "Many developers can build a website. What makes me different is that I design the whole system end to end: database, backend, and frontend.\n\n" +
      "What you get working with me:\n" +
      "• One developer who covers backend, database architecture, and frontend, so less miscommunication and rework\n" +
      "• A system that stays fast when many customers use it at the same time\n" +
      "• Consistent data: safe transactions, so orders and stock never get corrupted\n" +
      "• Clean, tested code that is easy to maintain and grow\n\n" +
      "Proof: Injibara Market (https://injibara-market.vercel.app), where I designed the Prisma database architecture and built parts of the Seller and Buyer dashboards, including the chat system.\n\n" +
      "Let's talk: zelalemassefa726@gmail.com"
    );
  }

  // 6. Clean code / testing / bugs
  if (
    has("bug", "clean", "quality", "testing", "tested") ||
    /\btests?\b/.test(question)
  ) {
    return (
      "Clean, reliable code is part of how I build, not an extra:\n\n" +
      "• Clear structure: routes, services, and database layers are separated, so code is easy to read and change\n" +
      "• Validation on every input, so bad data never reaches the database\n" +
      "• Testing the important flows (orders, stock updates, authentication) before release\n" +
      "• TypeScript and consistent naming to catch mistakes early\n" +
      "• Fixing the root cause of a bug, not just the symptom\n\n" +
      "The result: fewer bugs, easier updates, and a codebase other developers can pick up."
    );
  }

  // 10. Security
  if (has("secur", "hack", "protect", "vulnerab", "safe", "privacy")) {
    return (
      "Security is built in from the start:\n\n" +
      "• Authentication and role-based access, so sellers and buyers only see what they should\n" +
      "• Input validation on every request\n" +
      "• Prisma ORM with parameterized queries, which protects against SQL injection\n" +
      "• Secrets and API keys kept in environment variables, never in the code\n" +
      "• HTTPS and safe handling of user data\n\n" +
      "I treat security as part of the architecture, not something added at the end."
    );
  }

  // 5. Many users at the same time
  if (
    has(
      "same time",
      "many users",
      "many customers",
      "handle many",
      "traffic",
      "concurren",
      "simultaneous",
      "high load",
      "at once"
    )
  ) {
    return (
      "When many customers open or buy the same product at once, the system must stay fast and keep data correct. I handle it with:\n\n" +
      "• Database transactions, so two buyers can never both buy the last item\n" +
      "• Safe stock updates that happen as a single step\n" +
      "• Indexed queries and pagination, so pages stay fast under load\n" +
      "• A clean, modular API that scales as traffic grows\n" +
      "• Prisma ORM for typed, consistent database access\n\n" +
      "See it in Injibara Market: https://injibara-market.vercel.app"
    );
  }

  // Architecture / backend / database
  if (
    has(
      "architect",
      "database",
      "backend",
      "scalab",
      "prisma",
      "dashboard",
      "injibara",
      "consisten",
      "performance"
    )
  ) {
    return (
      "I specialize in end-to-end architecture, not just building websites. A website is easy to build; making it scalable, consistent, clean, and tested is the hard part.\n\n" +
      "Backend & Database:\n" +
      "• I design the database architecture with Prisma ORM to handle many customers at once, for example many buyers opening or purchasing the same product at the same time\n" +
      "• Fast: optimized queries, proper indexing, and pagination\n" +
      "• Scalable: a clean, modular API that grows with traffic\n" +
      "• Consistent: transactions and safe stock updates, so concurrent orders never corrupt data\n" +
      "• Clean & tested code: clear structure, validation, and testing\n\n" +
      "Frontend:\n" +
      "• I also built parts of the Seller Dashboard and Buyer Dashboard, including the chat system\n\n" +
      "See it live: https://injibara-market.vercel.app (check the Seller Dashboard)"
    );
  }

  // Learning mindset / failure / never give up / current work
  if (
    has(
      "awingi",
      "language model",
      "currently",
      "right now",
      "learning",
      "fail",
      "mistake",
      "give up",
      "never quit",
      "persist",
      "grow",
      "new technolog",
      "curious"
    ) ||
    /\bai\b/.test(question)
  ) {
    return (
      "Right now I'm learning and working on the Development and Evaluation of a Language Model for Awingi.\n\n" +
      "How I approach work:\n" +
      "• I love learning something new every day, and when a new technology comes out I want to try it\n" +
      "• I love fixing problems; a hard bug is a challenge I enjoy solving\n" +
      "• I'm not afraid of failure. I learn from my past failures and use them to build better next time\n" +
      "• I never give up: if the first approach doesn't work, I try another until it does\n\n" +
      "That's the mindset I bring to every project I work on."
    );
  }

  // 3. Love coding / passion
  if (has("love", "passion", "coding", "enjoy", "motivat")) {
    return (
      "I love coding because I get to turn a real problem into something people actually use.\n\n" +
      "What I enjoy most is the hard part behind the screen: designing a database and backend that stay fast, consistent, and reliable as more customers join. Seeing a clean system handle many users at once is what keeps me learning and improving every day." +
      "\n\nI also love learning from my past failures, and I never give up on a problem."
    );
  }

  // 12. Support after delivery
  if (
    has(
      "support",
      "maintenance",
      "maintain",
      "after delivery",
      "after the project",
      "after launch",
      "delivered"
    )
  ) {
    return (
      "I don't disappear after launch. After delivery I can help with:\n\n" +
      "• Bug fixes\n" +
      "• Updates and new features as your business grows\n" +
      "• Performance monitoring and improvements\n" +
      "• Clear code structure, so you or another developer can continue the project easily\n\n" +
      "We can agree on the support terms before the project starts: zelalemassefa726@gmail.com"
    );
  }

  // 7. Deadlines & communication
  if (
    has(
      "deadline",
      "communicat",
      "on time",
      "timeline",
      "schedule",
      "progress",
      "update me"
    )
  ) {
    return (
      "I work with clear milestones and regular updates:\n\n" +
      "• We define the scope and timeline together before starting\n" +
      "• I break the project into small milestones, so you see progress early\n" +
      "• I keep you updated and raise problems early, not at the deadline\n" +
      "• I reply promptly by email\n\n" +
      "My goal: delivered on time, with no surprises."
    );
  }

  // 8. Hardest project / challenge
  if (
    has("hardest", "challeng", "difficult", "toughest", "biggest problem", "solve")
  ) {
    return (
      "The hardest challenge was Injibara Market: designing it so many customers can open or buy the same product at the same time without slowing down or corrupting data.\n\n" +
      "How I solved it:\n" +
      "• Designed the database with Prisma and proper indexing for fast queries\n" +
      "• Used transactions and safe stock updates so orders stay consistent\n" +
      "• Added pagination and a modular API so the system keeps scaling\n" +
      "• Tested the main flows before release\n\n" +
      "Try it live: https://injibara-market.vercel.app"
    );
  }

  // 9. Rate / price / availability
  if (
    /\brates?\b/.test(question) ||
    has(
      "price",
      "pricing",
      "cost",
      "charge",
      "how much",
      "budget",
      "salary",
      "hourly",
      "quote",
      "available",
      "availability"
    )
  ) {
    return (
      "My rate depends on the scope, features, and timeline, so I give a fair quote after I understand your project.\n\n" +
      "To get a quote, email zelalemassefa726@gmail.com with what you want to build and your timeline.\n\n" +
      "Availability: I'm open to freelance and full-time opportunities."
    );
  }

  // 11. Team or alone
  if (
    has("team", "alone", "solo", "collaborat", "by yourself", "independent")
  ) {
    return (
      "Both. I can own a project end to end by myself, from database to frontend, and I also work well in a team:\n\n" +
      "• Clear communication and regular updates\n" +
      "• Clean, readable code that teammates can understand quickly\n" +
      "• Open to feedback and code reviews\n" +
      "• Comfortable using Git for shared work"
    );
  }

  // Greeting
  if (/\b(hello|hi|hey)\b/.test(question)) {
    return "Hello! 😊 How can I help you learn more about Zelalem?";
  }

  if (has("name", "who are you", "who is")) {
    return "I'm Zelalem Assefa, a Fullstack Developer. Nice to meet you!";
  }

  if (has("skill", "tech", "stack", "know")) {
    return (
      "I work with:\n" +
      "Frontend: React, Next.js, TypeScript, Tailwind CSS\n" +
      "Backend: Node.js, Express, REST APIs\n" +
      "Database: PostgreSQL, Prisma, MySQL, MongoDB"
    );
  }

  if (has("project", "work", "built", "portfolio", "demo", "live")) {
    return (
      "Here are some of my projects:\n\n" +
      "• Injibara E-Commerce – Full marketplace with Seller & Buyer dashboards, chat system, and a scalable Prisma database architecture\n" +
      "  Live Demo: https://injibara-market.vercel.app\n\n" +
      "• Ethio-Track – Real-time data tracking platform\n\n" +
      "• Discussion Forum – Community Q&A with authentication\n\n" +
      "Currently learning and working on:\n" +
      "• Development and Evaluation of a Language Model for Awingi\n\n" +
      "I love learning something new every day, and I keep taking on projects that push me further."
    );
  }

  if (has("contact", "email", "hire", "reach")) {
    return "You can contact me at:\nzelalemassefa726@gmail.com\n\nI'm available for freelance and full-time opportunities!";
  }

  if (has("experience", "year", "how long")) {
    return "I'm a Fullstack developer focused on building modern, performant web applications. I specialize in end-to-end development.";
  }

  if (has("service", "offer", "what can you do")) {
    return (
      "I offer:\n" +
      "• Fullstack Development\n" +
      "• Database & Backend Architecture\n" +
      "• Performance Optimization\n" +
      "• API Design & Third-party Integration"
    );
  }

  return "I can tell you about Zelalem's skills, projects, architecture, experience, rates, or how to contact him. What would you like to know?";
}