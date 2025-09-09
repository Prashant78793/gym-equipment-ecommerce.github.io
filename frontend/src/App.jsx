import { Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvide } from './context/AuthContext';
import Ai from './pages/home/Ai'; // ✅ Import Ai component

function App() {
  return (
    <>
      <AuthProvide>
        <Navbar />
         <div className="w-full flex justify-center items-center mb-4">
          <Ai />
        </div>
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;

