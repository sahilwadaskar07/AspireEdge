import React from 'react';
import './App.css'; // Import Tailwind styles
import Header from './components/header';
import UnlockPage from './pages/unlock-page';
import Footer from './components/footer';


const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-between">
    <Header/>

    <UnlockPage/>

    <Footer/>
    </div>
  );
};

export default App;
