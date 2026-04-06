import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: '', summary: '', content: '', image_url: '' });

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    const { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
    if (!error && data) setArticles(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from('articles').insert([formData]);
    if (!error) {
      setIsEditing(false);
      setFormData({ title: '', category: '', summary: '', content: '', image_url: '' });
      fetchArticles();
    } else {
      alert("Error saving article: " + error.message);
    }
  }

  async function handleDelete(id) {
    if (confirm("Voulez-vous vraiment supprimer cet article ?")) {
      await supabase.from('articles').delete().eq('id', id);
      fetchArticles();
    }
  }

  if (isEditing) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="page-title" style={{ marginBottom: 0 }}>Créer un Article</h1>
          <button className="btn" onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Titre</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Catégorie</label>
              <input type="text" className="form-control" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required placeholder="ex: PREMIER LEAGUE" />
            </div>
            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input type="url" className="form-control" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="https://..." />
            </div>
            <div className="form-group">
              <label className="form-label">Résumé court</label>
              <textarea className="form-control" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} style={{ minHeight: '60px' }}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Contenu</label>
              <textarea className="form-control" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Publier l'Article</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Gestion des Articles</h1>
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
          <Plus size={18} /> Nouvel Article
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Titre</th>
              <th>Catégorie</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: '32px' }}>Aucun article trouvé. Avez-vous connecté la base de données ?</td></tr>
            ) : (
              articles.map(article => (
                <tr key={article.id}>
                  <td style={{ width: '80px' }}>
                    {article.image_url ? <img src={article.image_url} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} /> : 'Aucune'}
                  </td>
                  <td style={{ fontWeight: 500 }}>{article.title}</td>
                  <td>{article.category}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{new Date(article.created_at).toLocaleDateString()}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn" style={{ padding: '6px' }} title="Modifier"><Edit size={16} /></button>
                      <button className="btn btn-danger" style={{ padding: '6px' }} onClick={() => handleDelete(article.id)} title="Supprimer"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
