import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 2. If the section crosses into view, set it as active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },

      { rootMargin: "-20% 0px -80% 0px" } 
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="layout">
      
      <nav className="sidebar">
        <a 
          href="#about" 
          className={activeSection === "about" ? "active" : ""}
        >
          about_me
        </a>
        <a 
          href="#experience" 
          className={activeSection === "experience" ? "active" : ""}
        >
          experience
        </a>
        <a 
          href="#projects" 
          className={activeSection === "projects" ? "active" : ""}
        >
          projects
        </a>
        <a 
          href="#skills" 
          className={activeSection === "skills" ? "active" : ""}
        >
          skills
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" >
          resume.pdf
        </a>
      </nav>

      <main className="content">
        
        <section id="about">
          <h1>Jashan Singh </h1>
          <p className="comment">// BSE Software Engineering @ University of Waterloo (2025 - Present)</p>
          <br/>
          <p>
            <span className="keyword">const</span> <span className="entity">focus</span> = <span className="string">"backend infrastructure, scalable ledgers, & C++ systems"</span>;
          </p>
          <p>
            Currently building high-throughput financial tools, data ingestion pipelines, and secure network protocols. Target architectures involve heavy multithreading, POSIX sockets, and payment processing.
          </p>
          <p>
            <a href="mailto:j438sing@uwaterloo.ca" className="ext-link">j438sing@uwaterloo.ca</a> | <a href="https://github.com/JashanSingh2k7" className="ext-link" target="_blank" rel="noreferrer">github</a> | <a href="https://www.linkedin.com/in/jashan-singh-48b9592a0/" className="ext-link" target="_blank" rel="noreferrer">linkedin</a>
          </p>
        </section>

        <section id="experience">
          <h2>experience()</h2>
          
          <div className="project-block">
            <p>
              <span className="keyword">Software Engineer</span> @ <span className="entity">Lount</span> 
              <br />
              (Architected dynamic billing logic using <span className="string">Stripe API</span> and <span className="string">Supabase PostgreSQL</span> triggers).
            </p>
            <p className="comment">/* Developed a full-stack Next.js SaaS to automate rent collection. Engineered a server-side PDF generation pipeline for real-time maintenance logs and Bill 60-compliant LTB dispute ledgers. */</p>
          </div>
    
          <div className="project-block">
            <p>
              <span className="keyword">SWE Intern</span> @ <span className="entity">Rinknet Software</span> 
              <br />
              (Managed CI/CD workflows using <span className="string">Jenkins</span>, ensuring 99% uptime for production-critical data ingestion).
            </p>
            <p className="comment">/* Engineered scalable Python data pipelines and Selenium scrapers to autonomously extract JavaScript-rendered data, reducing manual processing time by 90%. */</p>
          </div>

          <div className="project-block">
            <p>
              <span className="keyword">SWE Intern</span> @ <span className="entity">Sera4</span> 
              <br />
              (Reduced frontend production time by 40% through scalable <span className="string">React/MUI</span> architecture).
            </p>
            <p className="comment">/* Built interactive data dashboards to efficiently fetch, sort, and visualize large datasets in an Agile/Scrum environment. */</p>
          </div>
        </section>

        <section id="projects">
          <h2>projects()</h2>
          
          <div className="project-block">
            <p>
              <span className="keyword">Architect</span> @ <span className="entity">ZenithDrop</span> 
              <br />
              (<span className="string">C++, POSIX Sockets, Libsodium, Multithreading</span>).
            </p>
            <p>
              Architected a concurrent TCP server with a custom Thread Pool. Implemented <span className="success">std::condition_variable</span> to synchronize client streams and secured network payloads using <span className="success">XChaCha20-Poly1305</span> cryptography, processing data in fixed 1KB blocks streamed to disk.
            </p>
            <a href="https://github.com/yourusername/zenithdrop" className="ext-link" target="_blank" rel="noreferrer">view_source_code()</a>
          </div>

          <div className="project-block">
            <p>
              <span className="keyword">Architect</span> @ <span className="entity">Algorithmic Trading Engine</span> 
              <br />
              (<span className="string">Python, Tiingo API, Interactive Brokers, FinBERT</span>).
            </p>
            <p>
              Engineered an autonomous, event-driven trading architecture. Designed a robust order-execution state machine with a dynamic trailing stop-loss algorithm and strict time-decay evaluation constraints to mitigate high-frequency execution slippage.
            </p>
            <a href="https://github.com/yourusername/trading-engine" className="ext-link" target="_blank" rel="noreferrer">view_source_code()</a>
          </div>
          
          <div className="project-block">
            <p>
              <span className="keyword">Author</span> @ <span className="entity">Technical Systems Architecture Series</span> 
              <br />
              (<span className="string">C++, Linux/Unix System Programming</span>).
            </p>
            <p className="comment">/* Producing technical educational content breaking down low-level concepts including process control, memory management, and signal handlers. */</p>
          </div>
        </section>

        <section id="skills">
          <h2>sys_info()</h2>
          <div className="project-block">
            <p><span className="keyword">Languages:</span> C++, Python, Java, JavaScript, TypeScript, SQL (PostgreSQL)</p>
            <p><span className="keyword">Backend:</span> Node.js, Express, FastAPI, Flask, POSIX Sockets, TCP/IP, WebSockets</p>
            <p><span className="keyword">Cloud & Security:</span> AWS, Pandas, NumPy, Jenkins, libsodium</p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;