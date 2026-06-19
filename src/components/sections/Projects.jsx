import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src="project1.png"
                alt="Project 1"
                className="w-full h-70  rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event Booking Platform</h3>
              <p className="text-gray-400 mb-4">
                Secure event booking platform with OTP authentication,
                role-based access, and seamless booking management. Built for
                scalability with real-time search, concurrent booking handling,
                and a modern MERN stack architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "NodeMailer",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://eventora-hazel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src="project2.png"
                alt="Project 2"
                className="w-full h-70 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                AI-Powered Smart Price Tracker
              </h3>
              <p className="text-gray-400 mb-4">
                AI-powered price tracking app that monitors products and sends
                instant price drop alerts. Features automated scraping,
                interactive analytics, and fully serverless deployment with
                Next.js and Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "supabase",
                  "Recharts",
                  "Tailwindcss",
                  "shadcn/ui",
                  "vercel",
                  "Firecrawl",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://dealdrop-sooty.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src="project3.png"
                alt="Project 1"
                className="w-full h-70 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Web Scraper</h3>
              <p className="text-gray-400 mb-4">
                Full-stack MERN application that scrapes and displays top Hacker
                News stories with real-time data storage in MongoDB. Features
                JWT authentication, protected bookmarking, automated scraping,
                and a responsive React-based user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB", "vercel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://web-scraper-wheat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src="project4.png"
                alt="Project 1"
                className="w-full h-70  rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Crypto Tracker</h3>
              <p className="text-gray-400 mb-4">
                Real-time cryptocurrency dashboard for tracking market trends,
                rankings, and live coin data. Includes advanced filtering,
                interactive charts, and dynamic routing for detailed coin
                insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Javascript",
                  "Express.js",
                  "React.js",
                  "Recharts",
                  "CoinGecko API",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src="project6.png"
                alt="Project 1"
                className="w-full h-70  rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Game Listing Website</h3>
              <p className="text-gray-400 mb-4">
                Built a modern gaming hub concept featuring a sleek dark-themed
                UI, intuitive genre-based filtering, and prominent hero sections
                for featured titles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "Express.js", "React.js", "TailwindCSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
