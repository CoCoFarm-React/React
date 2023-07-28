import './App.css';
import KakaoMap from './components/KakaoMap';
import FacebookLoginButton from './api/api';
import Footer from './components/commonComponents/Footer';
import CenterBoard from './components/adminComponents/CenterBoard';


function App() {

  return (
    <div className="App">
      <CenterBoard></CenterBoard>
      <Footer></Footer>
    </div>
  );
}

export default App;
