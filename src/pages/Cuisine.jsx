import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recepies = await data.json();
    // console.log(recepies);
    setCuisine(recepies.results);
    // setTotalPages(Math.ceil(recepies.totalResults / 10));
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}></Link>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
