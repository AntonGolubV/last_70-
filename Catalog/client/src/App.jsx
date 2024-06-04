import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Search from "./Header/Search";
import Default from "./Main/Default/Default";
import Comparison from "./Main/Comparison/Comparison";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [smartList, setSmartList] = useState([]);
  const smartArr = [
    "Apple",
    "Samsung",
    "Honor",
    "Realme",
    "Poco",
    "Vivo",
    "Xiaomi",
    "Huawei",
  ];
    const [blockBrandList, setBlockBrandList] = useState(smartArr);

  return (
    <Router>
      <Search 
      setSmartList={setSmartList} 
      setBlockBrandList={setBlockBrandList}
      />
      <Routes>
        <Route exact path="/" element={
        <Default 
         setBlockBrandList={setBlockBrandList} 
         setSmartList={setSmartList}
         blockBrandList={blockBrandList}
         smartList={smartList}
         />
         }/>
         <Route exact="/comparison" element={<Comparison />}/>
      </Routes>
    </Router>
  );
}

export default App;
