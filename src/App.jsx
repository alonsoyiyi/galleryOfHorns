import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import lab02 from './lab02.json';
import Header from './Header';
import Gallery from './Gallery';
import SelectBeast from './SelectBeast';
import Footer from './Footer';


function App() {

  const [filterName, setFilterName] = useState("");
  const [filterHorns, setFilterHorns] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function mostrarModal(name) {
    const beastWithName = lab02.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }
  function handleClose() {
    setDisplayModal(false);
  }
  function filtrarName(beasts) {
    return beasts.filter(beast => beast.title.toLowerCase().includes(filterName.toLowerCase()));
  }

  function filtrarHorns(beasts) {
    if (filterHorns === null) {
      return beasts;
    }
    return beasts.filter(beast => beast.horns === filterHorns);
  }

const filteredBeast = filtrarHorns(filtrarName(lab02));

  return (
    <>
      <div>
        <Header />
        <div className="input-container" > 
          <input className="beast-input" type="text" placeholder="Buscar nombre de Bestias" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
          <select className="beast-select" value={filterHorns || ""} onChange={(e) => setFilterHorns(e.target.value ? parseInt(e.target.value) : null)}>
          <option value="">Todos los cuernitos</option>
          <option value="1">1 Cuernito</option>
          <option value="2">2 Cuernitos</option>
          <option value="3">3 Cuernitos</option>
          <option value="4">4 Cuernitos</option>
          </select>
        </div>
        <Gallery mostrarModal={mostrarModal} allbeast={filteredBeast} />
        <SelectBeast selectedBeast={selectedBeast} show={displayModal} handleClose={handleClose} />
        <Footer />
      </div>
    </>
  );
}

export default App;
