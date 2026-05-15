import "./App.css";

function App() {
  return (
    <div className="layout">
      
      {/* Sticky Navigation Sidebar */}
      <nav className="sidebar">
        <a href="#about">about_me</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{color: "#7ee787"}}>resume.pdf</a>
      </nav>

      {/* Main Scrolling Content */}
      <main className="content">
        
        {/* About Section */}
        <section id="about">
          <h1>Jashan Singh </h1>
          <p className="comment">// software engineering @ university of waterloo</p>
          <br/>
          <p>
            <span className="keyword">const</span> <span className="entity">focus</span> = <span className="string">"backend infrastructure, scalable ledgers, & C++ systems"</span>;
          </p>
          <p>
            Currently building high-throughput financial tools and training for $O(N)$ execution. Target architectures involve heavy data pipelines, memory optimization, and payment processing.
          </p>
          <p>
            <a href="https://github.com/yourusername" className="ext-link" target="_blank" rel="noreferrer">github</a> | <a href="https://linkedin.com/in/yourusername" className="ext-link" target="_blank" rel="noreferrer">linkedin</a>
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2>experience()</h2>
          
          <div className="project-block">
            <p>
              <span className="keyword">Incoming SWE Intern</span> @ <span className="entity">Looking for Winter/Spring 2027</span>
            </p>
            <p className="comment">/* Seeking roles in FinTech, Big Tech, or hardware infrastructure. */</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>projects()</h2>
          
          <div className="project-block">
            <p>
              <span className="keyword">Arch. & Eng.</span> @ <span className="entity">PropertyLedger</span> 
              <br />
              (Engineered automated rent collection and compliance ledgers utilizing <span className="string">Stripe API</span> and <span className="string">PostgreSQL</span>).
            </p>
            <p>
              Built an end-to-end management platform handling maintenance ticket routing and real-time backend <span className="success">PDF extraction</span>. Designed for scale and seamless financial tracking.
            </p>
            <a href="https://github.com/yourusername/repo" className="ext-link" target="_blank" rel="noreferrer">view_source_code()</a>
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;