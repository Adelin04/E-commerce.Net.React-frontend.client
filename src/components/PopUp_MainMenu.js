import React from "react";
import styledComponents from "styled-components";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../Features/ProductSlice";

const PopUp_MainMenu = ({
  linksSlide,
  dinamicValue,
  indexOfLinkTouched,
  toggle,

}) => {
  const dispatch = useDispatch();

  const handleDispatch_ProductByCategory = (category) => {
    dispatch(
      getProductsByCategory({ category})
    )
  }

  return (
    <Wrapper>
      {toggle ? (
        <div

          className="slide"
          style={{ height: dinamicValue, transition: "height 1s" }}
        >
          <div
            className="container-links transition"
            style={
              dinamicValue > 0
                ? {
                  height: `${dinamicValue === 100 ? 35 : 0}px`,
                  background: "#a58aa2d4",
                  borderRadius: "5px",
                  transition: "all 2.5s",
                }
                : {
                  height: "0px",
                  background: "transparent",
                  borderRadius: "5px",
                  transition: "all 0.2s",
                }
            }
          >
            <div className="link-section">
              {dinamicValue > 0
                ? linksSlide[indexOfLinkTouched].subLinks.map(
                  (subLink, index) => {
                    return (
                      <div key={index} className="wrapper-link">
                        <NavLink className="link-popUp" to={linksSlide[indexOfLinkTouched].to} onClick={() => handleDispatch_ProductByCategory(subLink.name)}> {subLink.name} </NavLink>
                      </div>
                    );
                  }
                )
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default PopUp_MainMenu;

const Wrapper = styledComponents.div`
  position:absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 90px;
  width: 100%;
  border-radius: 5px;
  background-color: white; 
  z-index: -1;
  
  .slide{
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0px;
    margin:auto;
    width: 100%;
    border-radius: 5px; 
    background-color: var(--baseColor); 
    z-index: 1;
  }

  .img-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0px 5px 0px 0px;
  }
  
  .container-links {
    position:relative;
    top: 40px;
    display: flex;
    align-items: center;
    width: 80%;
    background: var(--sliderColor);
  }
  
  .container-links ,.transition {
    transition: "all 0.5s",
    background: transparent;
  }
  
  .wrapper-link{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin:0px;
  }
  
  
  .link-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    height: 30px;
    padding: 5px;
    margin: 0px 30px;
  }
  
  
  .link-popUp {
    diplay: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    height: auto;
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    z-index: 2;
  }
  
  .link-popUp:hover{
    height: auto;
    border-bottom: 1px solid var(--baseColor);
  }

    @media only screen and (max-width: 650px) {
      position:absolute;
      display: flex;
      justify-content: space-around;
      align-items: center;
      top: 200px;
      height: 150px;
      border-radius: 5px;
      background-color:transparent; 
      z-index: -1;
    }

    @media only screen and (max-width: 450px) {
      height: 0px;
      .slide {
        visibility: hidden;
      }
    }

  }
`;
