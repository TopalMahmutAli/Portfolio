import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import CV from './components/CV'; // Utilisation de l'importation par défaut
/*import { Contact } from "./components/Contact";*/
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      
      <CV /> {/* Utilisation du composant CV ici */}
      <Footer />
    </div>
  );
}

export default App;
