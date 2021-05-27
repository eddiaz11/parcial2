
import './App.css';
import Table from "./Components/Table/Table";
import Card from "./Components/Card/Card";

import { React, useEffect, useState, useCallback } from "react";

function App() {
  const [series, setSeries] = useState([]);
  const [serie, setSerie] = useState(false);

  const handleSeries=useCallback(
    () => {
      fetch("https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json")
      .then((res) => res.json())
      .then((res) => {
       
        setSeries(res);
        localStorage.setItem("series", res);
      });
    }, []
    );
    const handleSerie=useCallback(
      (serie) => {
        setSerie(serie)
      }, []
      );

  useEffect(() => {
   

    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) setSeries("");
      else setSeries(localStorage.getItem("series"));
    }else{
      handleSeries();
    }
 

    
  }, [handleSeries, series]);
  
  return (
    <div className="container p-3">
    <h1>T.V. Series</h1>
    <hr/>
    <div className="row">
    <div className="col-sm-8"> 
    <Table series={series} handleSerie={handleSerie}></Table>
    </div>
    {
      serie && 
      <div className="col-sm-4">
        <Card serie={serie}></Card>
      </div>
    }
    
    
    
    </div>
    
    </div>
    );
  }
  
  export default App;
  