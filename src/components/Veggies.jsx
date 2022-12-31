import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Link } from "react-router-dom";


function Veggies() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies ();
    // fetchData();
  }, []);

  const getVeggies = async () => {

    const check = localStorage.getItem('veggie');

  if(check){
    setVeggies(JSON.parse(check));
  }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    localStorage.setItem('veggie', JSON.stringify(data.recipes))
    console.log(data);
    setVeggies(data.recipes);
  };
  }

 

// const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "2febc6d924msh8a85ca7655a6e08p1e9a56jsna3897334403a",
//       "X-RapidAPI-Host": "tasty.p.rapidapi.com"
//     }
//   };
  
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://tasty.p.rapidapi.com/recipes/list?number=100&offset=0",
  //       options
  //     );
  //     const data = await response.json();
  //     setPopular(data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian</h3>
        <Splide options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:"5rem",
        }}>
          {veggies.map((recipe) => {
            return (
              <SplideSlide  key={recipe.id}>
                <Card key={recipe.id}>
                  <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow:hidden;
  position:relative;
  cursor:pointer;




  img {
   border-radius: 2rem;
   position:absolute;
   left:0;
   width:100%;
   height:100%;
   object-fit:cover;
   transition: transform 0.5s ease-in-out;

  }

  p {
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%, 0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;

  }

  &:hover img{
    transform: scale(1.1);
  }
`;

const Gradient = styled.div`
z-index: 3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0) ,rgba(0,0,0,0.5))
`

export default Veggies;
