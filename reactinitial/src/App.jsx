import React, { useEffect, useState} from "react";
import LoadingMask from "./components/loadingMask";
import Laptop from "./components/laptop";

const url = 'https://demoapi.com/api/laptop/';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(null);
  const [subShow, setSubShow ] = useState(false);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const Laptops = await response.json();
      setLaptops(laptops);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSubShow(true);
    }, 10000);
  }, []);

  const handleSubscribed = () => {
    setTimeout (() => {
      setSubShow(false);
    }, 5000);
  }

  return (
    <div>
      <h1>Laptops</h1>
      {loading ? (
        <LoadingMask />
      ) : (
        laptops.map((c) => (
        <Laptop key={c.name} name={c.name} details={c.deatils} /> 
        ))
      )}
    </div>
  );
};

export default App;

