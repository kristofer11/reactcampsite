import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  console.log();
  return (
    <div className="App">
      <Header/>
      <CampsitesList/>
      <Footer/>
    </div>
  );
}

export default App;
