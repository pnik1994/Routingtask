import logo from './logo.svg';
import './App.css';
import Header from './component/Header';

import Leftsidebar from './component/Leftsidebar';
import Rightsidebar from './component/Rightsidebar';
import Footer from './component/Footer'


function App() {
  return (
    <div className="App">
      
     <Header/>
     <Leftsidebar/>
     <Rightsidebar/>
     <Footer/>
    </div>
  );
}
export default App;