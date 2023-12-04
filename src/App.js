import React,{useState,useEffect} from"react"
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
     <h1>{message}</h1>
    </div>
  );
}

export default App;
