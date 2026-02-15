import './App.css'

function App() {
  const githubRepo = "https://github.com/BaquiaxAntonio/aws-cdn-app.git";

  return (
    <div className="container">
      <div className="glass-card">
        <div className="status-badge">● Deployment Active</div>
        
        <h1>AWS CDN Deployment</h1>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Proyecto Assignment 02 - Infraestructura escalable con CloudFront.
        </p>

        <a 
          href={githubRepo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="primary-btn"
        >
          <span>Ver Repositorio en GitHub</span>
          <span style={{ fontSize: '1.2rem' }}>↗</span>
        </a>
      </div>
    </div>
  )
}

export default App