import React, { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }
  .black {
    color : #ccc;
  }
  .yellow {
    color: #fcc419;
  }
`;

const FeedPage = () => {
  
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4]
  
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
      setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };
  return (
    <section>
      <></>
      <Stars>
        {array.map((el) => (
        <ImStarFull
          key={el}
          onClick={() => handleStarClick(el)}
          className={clicked[el] ? 'yellow' : 'black'}
          size="35"
        />))}
      </Stars>
    </section>
  );
};

export default FeedPage;