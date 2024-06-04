import { useEffect, useState } from "react";
import axios from "axios";

import BrandList from "./BrandFor/BrandList";
/* import Search from "./Header/Search"; */
import AllParamBlock from "./Params/allParamBlock";
import SmartList from "./SmartBlockList/SmartBlockList";

function Default({ setBlockBrandList, blockBrandList, smartList, setSmartList }){
    console.log(smartList, blockBrandList);
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
      /* const [smartList, setSmartList] = useState([]);
  

    const [blockBrandList, setBlockBrandList] = useState(smartArr); */
      const showSmartphonsByBrand = (name) => {
        setBlockBrandList((blockBrandList) =>
          blockBrandList.filter((block) => block.length < 1)
        );
        const axiosInstance = axios.create({
          baseURL: "http://localhost:5000",
        });
        axiosInstance
          .get("/get/Smartphone/ByBrand", { params: { brand: name } })
          .then((response) => {
            setSmartList(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <>
      {/* <Search showBySubName={showBySubName} setSmartList={setSmartList} setBlockBrandList={setBlockBrandList}></Search> */}
      <main className="main">
        <h2>Мобильные телефоны | смартфоны</h2>
        <div className="in_main">
          <AllParamBlock
            smartArr={smartArr}
            setBlockBrandList={setBlockBrandList}
            setSmartList={setSmartList}
          ></AllParamBlock>
          <aside>
            <BrandList
              data={blockBrandList}
              showBrandParent={showSmartphonsByBrand}
            ></BrandList>
            <SmartList data={smartList} setSmartList={setSmartList} ></SmartList>
          </aside>
        </div>
        <div className="getInfoEl"></div>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default Default;

