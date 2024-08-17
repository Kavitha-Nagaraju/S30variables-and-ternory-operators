import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheets';

function App() {
  return (
    <div className="App">
      <MarksSheet name="Hemalatha" telugumarks="50" englishmarks="80" hindhimarks="40" mathsmarks="60" physicsmarks="90" socialmarks="70" > </MarksSheet>
      <MarksSheet name= "Shirisha" telugumarks="80" englishmarks="70" hindhimarks="60" mathsmarks="90" physicsmarks="50" socialmarks="30"></MarksSheet> 
      <MarksSheet name="Kusuma"telugumarks="70" englishmarks="60" hindhimarks="50" mathsmarks="49" physicsmarks="78" socialmarks="100"></MarksSheet>
      <MarksSheet  name="Trayakshi" telugumarks="55" englishmarks="99" hindhimarks="86" mathsmarks="67" physicsmarks="98" socialmarks="45"></MarksSheet>
    
    </div>
  );
}

export default App;
