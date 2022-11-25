import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header-content/Header'
import Services from './component/Services/Services'
import Others from './component/Others/Others'
import Inquiries from './component/Inquiries/Inquiries'
import Footer from './component/Footer/Footer'
import About from './component/About/About'
import Experience from './component/Experience/Experience'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Services/>
    <Others/>
    <About/>
    <Experience/>
    <Inquiries/>
    <Footer/>
    </div>
  );
}

export default App;
