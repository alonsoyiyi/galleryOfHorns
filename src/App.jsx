import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import lab02 from './lab02.json';
import Header from './Header';
import Gallery from './Gallery';
import SelectBeast from './SelectBeast';
import Footer from './Footer';


function App() {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});
  const [filterName, setFilterName] = useState("");
  const [filterHorns, setFilterHorns] = useState(null);

  function filtrarName(beasts) {
    return beasts.filter(beast => beast.title.toLowerCase().includes(filterName.toLowerCase()));
  }

  function filtrarHorns(beasts) {
    if (filterHorns === null) {
      return beasts;
    }
    return beasts.filter(beast => beast.horns === filterHorns);
  }




  
  function mostrarModal(name) {
    const beastWithName = lab02.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);2
  }
  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <>
      <div>
        <Header />
        <Gallery mostrarModal={mostrarModal} allbeast={lab02} />
        <SelectBeast selectedBeast={selectedBeast} show={displayModal} handleClose={handleClose} />
        <Footer />
      </div>
    </>
  );
}

export default App;
