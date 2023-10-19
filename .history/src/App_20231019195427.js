
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

function App() {
  const [items, setItems] = useState({});
  
  const API_KEY = REACT_APP_API_KEY
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("dark");
  const [query, setQuery] = useState("general");
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(218 245 255)';
      document.getElementById('main').style.backgroundColor = 'rgb(218 245 255)'
      document.getElementById('navbar').style.backgroundColor = 'rgb(107 187 217)'
      document.getElementById('banner').style.backgroundColor = 'rgb(173 222 240)'
      document.getElementById('banner').style.color = 'black'
      // rgb(12, 12, 12)
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(52, 52, 52)';
      document.getElementById('main').style.backgroundColor = 'rgb(52, 52, 52)'
      document.getElementById('banner').style.backgroundColor = 'rgb(12, 12, 12)'
      document.getElementById('banner').style.color = 'white'
    }
  }
  useEffect(() => {
    toggleMode();
  }, []);
  useEffect(() => {
    fetchData();
  }, [query])
  const fetchData = async () => {
    setLoading(true);
    const response =  await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=80&query=${query}&client_id=${API_KEY}`)
    const newItem = await response.json();
    // console.log(newItem);
    setItems(newItem);
    setLoading(false);
  }
  const handleSearch = (q) => {
    setQuery(q);
  }
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} handleSearch={handleSearch} />
      <Banner handleSearch={handleSearch} mode={mode} />
      {loading ? <Spinner mode={mode} /> : ""}
      <Main items={items} mode={mode} />
      <Footer />
    </div>
  );
}

export default App;
