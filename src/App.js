import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import {useParams} from "react-router";

const Home = (props) => {
  return (
    <div>
        <h1>Welcome home</h1>        
    </div>
  );
}

const Text = (props) => {
  const {text} = useParams()
  // isNaN(text)?
  if(isNaN(text)){
  return (
    <h1>
      The word is: {text}
    </h1>
  )}
  else{
  return (
    <h1>
      The number is: {text}
    </h1>
  )}
}

const TextPlus = (props) => {
  const {text,color,background} = useParams()
  // isNaN(text)?
  if(isNaN(text)){
  return (
    <h1 style={{color:color,backgroundColor:background}}>
      The word is: {text}
    </h1>
  )}
  else{
  return (
    <h1 style={{color:color,backgroundColor:background}}>
      The number is: {text}
    </h1>
  )}
}

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:text" element={<Text/>} />
        <Route path="/:text/:color/:background" element={<TextPlus/>} />

      </Routes>
    </div>
  );
}

export default App;
