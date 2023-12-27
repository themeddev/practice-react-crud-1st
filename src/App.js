import './App.css';
import PostsList from './components/PostsList';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import PostEdit from './components/PostEdit';
import PostDetail from './components/PostDetail';

function App() {


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<PostsList />} />
          <Route path='/post' element={<PostEdit />} />
          <Route path='/detail/:id' element={<PostDetail />} />
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
