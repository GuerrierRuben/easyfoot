import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Articles from './pages/Articles';
import Videos from './pages/Videos';

function App() {
  return (
    <BrowserRouter>
      <div className="admin-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
