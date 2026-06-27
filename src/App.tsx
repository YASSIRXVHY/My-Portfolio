import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<ArticleView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
