import './App.css';
import Header from "./comp/header";
import Logo from './assets/card_asset.webp';
// import Video from "./assets/one-third.mp4";
import InputWithButton from "./comp/inputComp";
import CheckBox from './comp/check';
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{backgroundColor: "grey", height: "100vh",  backgroundImage: 'linear-gradient(to bottom right, black, grey)'}}>

     
      <div style={{position: "absolute", top: "30%", left: "20%", color: "white"}}>
        <h2>India’s Credit</h2>
        <h2>Revolution is here.</h2>
        <h2>Pay 1/3rd. Anywhere.</h2>
      </div>
      <div style={{position: "absolute", top: "25%", right: "15%", color: "white"}}>
        <img style={{height: "500px", width: "400px", transform: "rotate(10deg)" }} src={Logo} alt="React Logo" />
      </div>
      <div style={{position: "absolute", top: "60%", left: "15%"}}>
        <InputWithButton/>
      </div>
      <div style={{position: "absolute", top: "65%", left: "15%", display: "flex"}}>
       <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <CheckBox/>
       </div>

      <div
      style={{width: "300px", display: "flex", flexDirection: "column", color: "white"}}
      >
        <h6 style={{margin: "3px"}}>By submitting this information, you agree to be contacted</h6>
        <h6 style={{margin: "3px"}}>by Uni Cards over Call, SMS, Email or WhatsApp to guide you</h6>
        <h6 style={{margin: "3px"}}>through your application.</h6>
      </div>

        </div>
      </div>
      <div style={{position: "absolute", top: "100vh", width: "100vw", backgroundColor:"black", }}>
        <div style={{ display: "inline-block"}}>
        <Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
        </div>
        <div style={{width: "50%",display: "inline-block", flexDirection: "column"}}>
            <div style={{color: "white"}}>
                  <h3>Uni Pay 1/3rd Card</h3>
                  <h3>With Great Flexibility,</h3>
                  <h3>Comes Great Power.</h3>
            </div>
            <div style={{color: "white"}}>
              <h4>Split your spends into 3 parts over 3 months at</h4>
              <h4>no extra charges. And, get 1% rewards if you </h4>
              <h4>pay in 1 month.</h4>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
