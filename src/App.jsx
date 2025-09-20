import Header from './components/Header'
import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Resume from './pages/Resume';
import Qna from './pages/QnA';
import NoMatch from './pages/404Page';
import Coverletter from './pages/Cover';
import { Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {

  const [user, loading, error] = useAuthState(auth);

  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/coverletter" element={<Coverletter />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App