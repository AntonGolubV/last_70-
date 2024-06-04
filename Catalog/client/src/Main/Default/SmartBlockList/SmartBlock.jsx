import React, { useState, useEffect } from "react";
import './SmartBlockList';
import axios from "axios";
export default function SmartBLock({ data }){
    
    let { id, key, extended_name, images, description, description_list } = data;
    let { header } = images;
    let no = "Нет в наличии"; 
    
    const postFavSmartKey = () => {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
          });
          axiosInstance
            .post("/post/Smartphone/ByKey", { params: { key: key } });
    }

    const postBasketSmartId = () => {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000",
          });
          axiosInstance
            .post("/post/Smartphone/ById", { params: { id: id } });
    }
    return (
        
        <div className="smart_block">
        <div className="flex_smart">
            <div style={{height: "80%"}}>  <img src={header} alt="" style={{height: "100%"}} /></div>  
            <div style={{margin: "15px"}}>
                <div className="flex_smart_text" style={{fontSize: "1.6rem", marginBottom: "5px"}}>{extended_name}</div> 
                <div style={{fontSize: "1.3rem", fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", fontWeight: "bold"}}>{description}</div>
            </div>
        </div>
            {data.prices == null && <div> { no } </div>}
         {data.prices !== null && <div>{ data.prices.price_max.amount } BYN</div>} 
         <button onClick={postFavSmartKey} style={{marginRight: "15px"}}>Кинуть в корзину</button>
        <button onClick={postBasketSmartId}>Отложить в избранное</button> 
        </div>
        );
    };