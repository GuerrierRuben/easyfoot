export default function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Tableau de bord</h1>
      <div className="card">
        <h3>Bienvenue sur EasyFoot CMS</h3>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
          Ceci est votre interface d'administration. À partir d'ici, vous pouvez gérer tous les contenus de votre site.
          Assurez-vous d'avoir connecté Supabase via vos clés d'API dans `.env`.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div className="card">
          <h2>14</h2>
          <p className="form-label" style={{ marginTop: '8px' }}>Articles publiés</p>
        </div>
        <div className="card">
          <h2>8</h2>
          <p className="form-label" style={{ marginTop: '8px' }}>Vidéos en ligne</p>
        </div>
        <div className="card">
          <h2>5</h2>
          <p className="form-label" style={{ marginTop: '8px' }}>Équipes suivies</p>
        </div>
      </div>
    </div>
  );
}
