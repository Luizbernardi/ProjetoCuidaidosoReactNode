// src/App.jsx
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
    return (
        <div className="app-container">
            <Header />
            {/* Outros componentes ou conteúdo podem ser adicionados aqui */}
            <Footer />
        </div>
    );
};
