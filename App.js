import React, { useState } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const App = () => {
  const [presetCount, setPresetCount] = useState(4);

  const presets = [
    { name: 'Studio Biru', bgColor: '#0039C8', image: 'studio_biru.jpg' },
    { name: 'Studio Merah', bgColor: '#B2DD3C', image: 'studio_merah.jpg' },
    { name: 'Polaroid', bgColor: '#B2DD3C', image: 'polaroid.jpg' },
    { name: 'Foto Keluarga', bgColor: '#B2DD3C', image: 'foto_keluarga.jpg' },
    { name: 'Anime', bgColor: '#0039C8', image: 'anime.jpg' },
    { name: 'Cyberpunk', bgColor: '#B2DD3C', image: 'cyberpunk.jpg' },
    { name: 'Watercolor', bgColor: '#0039C8', image: 'watercolor.jpg' },
    { name: 'Cartoon', bgColor: '#B2DD3C', image: 'cartoon.jpg' },
  ];

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLoadMore = () => {
    setPresetCount(presetCount + 4);
  };

  return (
    <div className="min-h-screen bg-black text-white font-gentari flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center bg-gradient-to-r from-black via-gray-900 to-black">
        <h1 className="text-3xl font-bold text-white">GOM AI</h1>
        <button
          onClick={handleLogin}
          className="bg-[#ADADAD] text-white px-3 py-1 rounded text-sm"
        >
          Sign in with Google
        </button>
      </header>

      {/* Hero Section */}
      <section className="w-full p-4 flex flex-col items-center">
        <div className="w-full h-48 bg-[#0039C8] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">HERO</h2>
        </div>
        <div className="flex space-x-2 mt-2">
          <button className="bg-[#012583] text-white px-2 py-1 rounded text-sm">HD Quality</button>
          <button className="bg-[#012583] text-white px-2 py-1 rounded text-sm">Instant Generation</button>
          <button className="bg-[#012583] text-white px-2 py-1 rounded text-sm">Free Generation*</button>
        </div>
        <p className="text-sm mt-2 text-center">
          Editin foto kamu jadi keren tanpa perlu susah tulis prompt, ada ribuan preset keren disini yang bisa kamu coba, GRATIS!
        </p>
      </section>

      {/* Preset Section */}
      <section className="w-full p-4">
        <h3 className="text-2xl font-bold mb-4">Pilih Preset</h3>
        <div className="grid grid-cols-2 gap-4">
          {presets.slice(0, presetCount).map((preset, index) => (
            <div
              key={index}
              className="h-40 flex flex-col justify-between p-4 rounded-lg"
              style={{ backgroundColor: preset.bgColor }}
            >
              <img src={preset.image} alt={preset.name} className="h-24 w-full object-cover" />
              <button
                className="bg-[#CEFF48] text-black px-2 py-1 rounded text-sm w-full"
                onClick={() => window.location.href = '/preset'} // Dummy redirect, nanti diganti
              >
                Pakai Preset
              </button>
            </div>
          ))}
        </div>
        {presetCount < presets.length && (
          <button
            onClick={handleLoadMore}
            className="mt-4 w-full bg-[#ADADAD] text-white px-4 py-2 rounded text-sm"
          >
            Load more...
          </button>
        )}
      </section>
    </div>
  );
};

export default App;