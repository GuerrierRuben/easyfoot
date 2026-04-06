import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Plus, Trash2 } from 'lucide-react';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', youtube_url: '', thumbnail_url: '' });

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const { data, error } = await supabase.from('videos').select('*').order('created_at', { ascending: false });
    if (!error && data) setVideos(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from('videos').insert([formData]);
    if (!error) {
      setIsEditing(false);
      setFormData({ title: '', youtube_url: '', thumbnail_url: '' });
      fetchVideos();
    } else {
      alert("Error saving video: " + error.message);
    }
  }

  async function handleDelete(id) {
    if (confirm("Voulez-vous vraiment supprimer cette vidéo ?")) {
      await supabase.from('videos').delete().eq('id', id);
      fetchVideos();
    }
  }

  if (isEditing) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="page-title" style={{ marginBottom: 0 }}>Ajouter une Vidéo</h1>
          <button className="btn" onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Titre de la vidéo</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">URL YouTube (ex: https://youtube.com/watch?v=...)</label>
              <input type="url" className="form-control" value={formData.youtube_url} onChange={e => setFormData({...formData, youtube_url: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">URL de la Miniature (Optionnel)</label>
              <input type="url" className="form-control" value={formData.thumbnail_url} onChange={e => setFormData({...formData, thumbnail_url: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer la Vidéo</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Gestion des Vidéos</h1>
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
          <Plus size={18} /> Ajouter une Vidéo
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th>Miniature</th>
              <th>Titre</th>
              <th>Lien</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.length === 0 ? (
              <tr><td colSpan="4" style={{ textAlign: 'center', padding: '32px' }}>Aucune vidéo. Avez-vous connecté la base de données ?</td></tr>
            ) : (
              videos.map(video => (
                <tr key={video.id}>
                  <td style={{ width: '120px' }}>
                    <div style={{ width: '100px', height: '56px', background: '#ccc', borderRadius: '4px' }}>
                      {video.thumbnail_url && <img src={video.thumbnail_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />}
                    </div>
                  </td>
                  <td style={{ fontWeight: 500 }}>{video.title}</td>
                  <td><a href={video.youtube_url} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>Voir sur YouTube</a></td>
                  <td>
                    <button className="btn btn-danger" style={{ padding: '6px' }} onClick={() => handleDelete(video.id)} title="Supprimer">
                      <Trash2 size={16} />
                    </button>
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
