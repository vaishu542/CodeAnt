import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignUp/SignIn';
import './App.css';
import Repository from './components/RepositoryPage/Repository';

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
