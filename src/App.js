import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';
import Section7 from './Components/Section7/Section7';
import Section8 from './Components/Section8/Section8';
import Section9 from './Components/Section9/Section9';
import Section10 from './Components/Section10/Section10';
import Section11 from './Components/Section11/Section11';
import Section12 from './Components/Section12/Section12';
import Section13 from './Components/Section13/Section13';
import image from './Components/Assets/image-nosection.png'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Section12/>
      <Section13/>
      <img styles={{height:"400px", width:"1300px"}} src={image}/>
      <Footer/>
    </div>
  );
}

export default App;
