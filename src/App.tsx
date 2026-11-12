import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<ArticleView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
