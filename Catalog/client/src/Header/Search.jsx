import React, { useState } from "react";
import SearchInp from "./SearchInp";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search(props){
    const { setBlockBrandList, setSmartList } = props;

    const showBySubName = (subName) => {
      setBlockBrandList((blockBrandList) =>
        blockBrandList.filter((block) => block.length < 1)
      );
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
      });
      axiosInstance
        .get("/get/Smartphone/BySubName", { params: { subName: subName } })
        .then((response) => {
          setSmartList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }; 

    function getFavSmart() {
      setBlockBrandList((blockBrandList) =>
        blockBrandList.filter((block) => block.length < 1)
      );
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
      });
      axiosInstance
        .get(
          "/get/Smartphone/ByFav")
        .then((response) => {
          setSmartList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }

      function getBasketSmart() {
        setBlockBrandList((blockBrandList) =>
          blockBrandList.filter((block) => block.length < 1)
        );
        const axiosInstance = axios.create({
          baseURL: "http://localhost:5000",
        });
        axiosInstance
          .get(
            "/get/Smartphone/ByBasket")
          .then((response) => {
            setSmartList(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        }

    return(
    <header className="header">
        <h1>Maгазин</h1>
        <SearchInp showBySubName={showBySubName} ></SearchInp>
        <div className="profil">
          <div className="profil_block">
            <i
              className="bi bi-person-circle"
              style={{ color: "black", fontSize: "2.5rem" }}
            ></i>
          </div>
          <div className="profil_text">
            <span className="registration">Войти</span>
            <span className="profile_span">Профиль</span>
          </div>
        </div>
        <div className="comparison">
          <Link to="/comparison">
            <img
              src="/comparison.png"
              alt=""
              style={{ width: "100%", height: "55%" }}
            />
          </Link>
        </div>
        <div className="favourites" style={{ marginLeft: "50px" }} onClick={getFavSmart}>
          <img
            src="/favourites.jpg"
            alt=""
            style={{ width: "100%", height: "55%" }}
          />
        </div>
        <div className="basket" onClick={getBasketSmart}>
          <div className="basket_img"></div>
          <div className="basket_text">Корзина</div>
        </div>
      </header>
    );
}