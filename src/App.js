import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import PopularExercises from './Components/PopularExercises';
import Footer from './Components/Footer';

function App() {
  return (
   <>
      <Navbar/>
      <HeroSection/>
      <PopularExercises/>
      <Footer/>
   </>
  );
}

export default App;
