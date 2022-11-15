import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import MajorGameComponents from "./MajorGameComponent";
import Slider from '../common/Slider';
import { ImStarFull } from "react-icons/im";
import { Navigate, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  background-color: #202221;
  padding-top: 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    padding-top: calc((40 / 720) * 100vw);
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1344px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const PopularLiveContainer = styled.div`
  height: 520px;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  margin-bottom: 40px;
  @media (max-width: 1100px) {
    flex-direction: column;
    height: max-content;
    padding: 0 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 720px) {
    margin-bottom: calc((40 / 1280) * 100vh);
    padding: 0 calc((40 / 720) * 100vw);
    height: max-content;
  }
`;

const LiveContainer = styled.div`
  height: 350px;
  padding: 0 70px;
  margin-bottom: 40px;
  width : 100%;
  .sliderContainer {
    height: auto;
    width : 100%;
  }
  @media (max-width: 1100px) {
    padding: 0 40px;
  }
  @media (max-width: 720px) {
    padding: 0 calc((40 / 720) * 100vw);
    height: max-content;
    margin-bottom: calc((40 / 1280) * 100vh);
  }
`;

const HighlightContainer = styled.div`
  height: auto;
  margin-bottom : 80px;
  margin-top : 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  ul{
    width : 100%;
    list-style : none;
    color : #fff;
    display : flex;
    height : auto;
    text-align : center;
    li{
      width : 50%;
      height : auto;
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
    padding: 0 calc((40 / 720) * 100vw);
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div .icon {
    width: 20px;
    height: auto;
    @media (max-width: 720px) {
      width: calc((35 / 720) * 100vw);
    }
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.5px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  @media (max-width: 1100px) {
    font-size: 22px;
  }
  @media (max-width: 720px) {
    font-size: calc((28 / 720) * 100vw);
  }
`;

const MoreDetails = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.38px;
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
  @media (max-width: 1100px) {
    margin-right: 3px;
    font-size: 22px;
  }
  @media (max-width: 720px) {
    margin-right: calc((3 / 720) * 100vw);
    font-size: calc((22 / 720) * 100vw);
  }
`;

const PopularLive = styled.div`
  width: 49%;
  height: 384px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const PopularLiveContent = styled.div`
  background: url("/images/cat/사료.jpg") no-repeat;
  /* background-size: 100% 344px; */
  background-position: center;
  background-size: cover;
  background-size: 100% 100%;
  width: 100%;
  height: 450px;
  margin-top: 21px;
  display: flex;
  align-items: flex-end;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transform: translate(0px, -5px);
    transition: all 0.1s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const PopularLiveBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  border-radius: 0 0 12px 12px;
`;

const WeekHighlight = styled.div`
  width: 100%;
  height: auto;
  padding : 0 70px;
  margin-bottom : 20px;
  text-align : center;
  .weekHighlight{
    font-size : 26px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 30px;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: max-content;
    margin: 0;
    margin-bottom: calc((40 / 1280) * 100vh);
  }
`;


const Rectangle = styled.div`
  margin: auto 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.height}px;
  text-align: center;
`;

const Text = styled.span`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || "white"};
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;
const Stars = styled.div`
  display: inline-block;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }
  .black {
    color : gray;
  }
  .yellow {
    color: #fcc419;
  }
`;
const Main = ({ setMobileMenu, mobileMenu }) => {

  const [clicked1, setClicked1] = useState([true, true, true, true, false]);
  const [clicked2, setClicked2] = useState([true, true, true, true, true]);
  const array = [0, 1, 2, 3, 4]
  
  // const handleStarClick = index => {
  //   let clickStates = [...clicked];
  //   for (let i = 0; i < 5; i++) {
  //     clickStates[i] = i <= index ? true : false;
  //   }
  //     setClicked(clickStates);
  // };
  // useEffect(() => {
  //   sendReview();
  // }, [clicked]); 

  // const sendReview = () => {
  //   let score = clicked.filter(Boolean).length;
  // };

  const navigation = useNavigate()

  return (
    <Wrapper>
      <ContentsContainer>
        <Slider type="cat"></Slider>
        <PopularLiveContainer>
          <PopularLive>
            <Title>핫딜</Title>
            <PopularLiveContent onClick={() => navigation('/detail')}>
              <PopularLiveBar>
                <Rectangle
                  color="#19793a"
                  width="60"
                  height="25"
                  fontSize="14"
                  style={{ marginLeft: "7px", marginRight: "74px" }}
                >
                  개사료
                </Rectangle>
                <div
                  style={{
                    height: "100%",
                    width: "70%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    fontSize="15px"
                    style={{ height: "100%", lineHeight: "37px" }}
                  >
                    유기농 사료
                  </Text>
                </div>
              </PopularLiveBar>
            </PopularLiveContent>
          </PopularLive>
          <MajorGameComponents />
        </PopularLiveContainer>
        <LiveContainer>
          <TitleContainer>
            <Title>PM 추천</Title>
          </TitleContainer>
          <div className='sliderContainer'>
            <Slider type="dog"></Slider>
          </div>
        </LiveContainer>
        <LiveContainer>
          <TitleContainer>
            <Title>오늘의 핫딜</Title>
          </TitleContainer>
          <div className='sliderContainer'>
            <Slider type="dogFood"></Slider>
          </div>
        </LiveContainer>
        <WeekHighlight>
          <Title className="weekHighlight">
            구매 후기
          </Title>
        </WeekHighlight>
        <HighlightContainer>
          <ul>
            <li>
              <Stars>
                <ImStarFull
                  className={'yellow'}
                  size="35"
                />
              </Stars>
              <Stars>
                <ImStarFull
                  className={'yellow'}
                  size="35"
                />
              </Stars>
              <Stars>
                <ImStarFull
                  className={'yellow'}
                  size="35"
                />
              </Stars>
              <Stars>
                <ImStarFull
                  className={'yellow'}
                  size="35"
                />
              </Stars>
              <Stars>
                <ImStarFull
                  className={'gray'}
                  size="35"
                />
              </Stars>
              <h1>단골</h1>
              <span>안전하고 저렴해서 자주 이용합니다</span>
            </li>
            <li>
              <Stars>
                {array.map((el) => (
                <ImStarFull
                  key={el}
                  className={clicked2 ? 'yellow' : 'black'}
                  size="35"
                />))}
              </Stars>
              <h1>믿을수 있는 곳</h1>
              <span>안전하고 저렴해서 자주 이용합니다. 후기 이벤트도 나쁘지 않네요</span>
            </li>
          </ul>
        </HighlightContainer>
        <Footer setMobileMenu={setMobileMenu} mobileMeunu={mobileMenu} />
      </ContentsContainer>
    </Wrapper>
  );
};

export default Main;
