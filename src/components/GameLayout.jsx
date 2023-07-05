// components/GameLayout.js

import React from 'react';
import Head from 'next/head';

const GameLayout = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        {/* Mettez ici vos balises meta, liens CSS, etc. */}
      </Head>
      <main className="max-w-lg p-4 bg-white rounded shadow-lg">
        {/* Affichez le titre du jeu ici, par exemple : */}
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {/* Affichez le contenu du jeu ici, par exemple : */}
        {children}
      </main>
      <footer className="text-center py-4">
        {/* Mettez ici le contenu du footer si nécessaire */}
      </footer>
      {/* Ajoutez d'autres éléments communs de mise en page ici si nécessaire */}
    </div>
  );
};

export default GameLayout;
