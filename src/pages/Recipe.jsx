import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipe = await api.json();
    setDetails(recipe);
    console.log(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </div>
        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))};
        </ul>
        )}
        </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  img {
    width: 30rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background:white;
  border: 2px solid black;
  margin-right: 1.6rem;
  font-weight: 600;
  max-height: 6vh;
`;
const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  width: max-content;
  div {
    display: flex;
    width: 100%;
  }
  div h3 {
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
`;

export default Recipe