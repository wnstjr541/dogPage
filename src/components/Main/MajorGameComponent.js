import React from "react";
import styled from "styled-components";
import MajorGameSlider from "../slider/MajorGameSlider";
import { IoIosArrowRoundForward } from "react-icons/io";

const MajorGame = styled.div`
  width: 50%;
  height: auto;
  .web {
    width: 100%;
    display: flex;
    float : right;
    justify-content: space-between;
  }
  .mobile {
    display: none;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 720px) {
    height: max-content;
    .web {
      display: none;
    }
    .mobile {
      width: 101%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const MajorGameContainer = styled.div`
  width: 80%;
  margin : 0 0 0 auto;
  height: 454px;
  border-radius: 12px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #2c2d2d;
  cursor: pointer;
  @media (max-width: 1700px) {
    display: ${(props) => props.idx === "2" && "none"};
    width: ${(props) => props.idx === "1" && "100%"};
    /* height: ${(props) => props.idx === "1" && "294px"}; */
  }
  @media (max-width: 720px) {
    height: calc((294 / 1280) * 100vh);
    margin-top: calc((20 / 1280) * 100vh);
  }
`;

const MajorGameContents = styled.div`
  flex: 1;
  border-bottom: 1px solid #202221;
  display: flex;
  &:hover {
    background-color: #464947;
  }
  @media (max-width: 1100px) {
    display: ${(props) => Number(props.idx) > 2 && "none"};
  }
  @media (max-width: 720px) {
    display: ${(props) => (Number(props.idx) > 2 ? "none" : "flex")};
  }
`;

const MajorGameTag = styled.div`
  width: 50px;
  height: 22px;
  margin-top: 13px;
  margin-right : 10px;
  border-radius: 0 6px 6px 0;
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.fontSize || 12}px;
  font-family: "Noto Sans KR", sans-serif;
  color: ${(props) => props.color || "#fff"};
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 1100px) {
    width: 49px;
    height: 32px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    span {
      font-size: 18px;
      margin: 0;
    }
  }
  @media (max-width: 720px) {
    width: calc((49 / 720) * 100vw);
    height: calc((32 / 1280) * 100vh);
    font-weight: 500;
    line-height: calc((32 / 720) * 100vw);
    span {
      font-size: calc((20 / 720) * 100vw);
    }
  }
`;

const TagText = styled.span`
  margin-left: 3px;
  font-size: ${(props) => props.fontSize || "12px"};
`;

const TeamContainer = styled.div`
  /* width: 60px; */
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 1100px) {
    transform: scale(2);
  }
  @media (max-width: 720px) {
    width: calc((83 / 720) * 100vw);
    height: calc((98 / 1280) * 100vh);
    transform: none;
    justify-content: space-around;
    img {
      height: calc((50 / 1280) * 100vh);
    }
  }
`;

const TeamName = styled.span`
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1px;
  color: #fff;
  margin-top: 7px;
  line-height: 12px;
  white-space: nowrap;
  @media (max-width: 720px) {
    font-size: calc((24 / 720) * 100vw);
  }
`;

const Score = styled.div`
  width: 22px;
  height: 22px;
  margin: auto 0 auto 3px;
  border-radius: 5px;
  background-color: #222;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.color || "#f5c703"};
  @media (max-width: 1100px) {
    transform: scale(1.8);
  }
  @media (max-width: 720px) {
    transform: none;
    font-size: calc((30 / 720) * 100vw);
    width: calc((39 / 720) * 100vw);
    height: calc((39 / 1280) * 100vh);
    line-height: calc((39 / 1280) * 100vh);
  }
`;

const GameInfoContainer = styled.div`
  width: 73px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  .outer {
    width: 48px;
    height: 17px;
    border-radius: 8.5px;
    background-color: #be4853;
    display: flex;
    align-items: center;
    margin: 8px 0 7px 0;
  }
  .hotText {
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.18;
    letter-spacing: normal;
    color: #fff;
    margin-left: 3px;
  }
  .circle {
    width: 13px;
    height: 13px;
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
  }

  @media (max-width: 1100px) {
    transform: scale(1.8);
    justify-content: center;
    width: calc((150 / 720) * 100vw);
    .hotText {
      padding-top: 3px;
    }
  }

  @media (max-width: 720px) {
    width: calc((114 / 720) * 100vw);
    height: 100%;
    transform: none;
    justify-content: space-evenly;
    .hotText {
      font-size: calc((16 / 720) * 100vw);
    }
    .outer {
      margin: 0;
      width: calc((80 / 720) * 100vw);
      height: calc((25 / 1280) * 100vh);
      border-radius: 11.3px;
      display: flex;
      justify-content: center;
    }
    .circle {
      margin: 0;
    }
  }
`;

const Title = styled.span`
  display : block;
  width : 100%;
  text-align : center;
  margin : 0 auto;
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

const GameState = styled.div`
  width: 60px;
  height: 22px;
  border-radius: 6px;
  background-color: ${(props) => props.background};
  margin: 6px 0 12px 0;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 22px;
  letter-spacing: -0.33px;
  color: ${(props) => props.color || "#ccc"};
  text-align: center;

  @media (max-width: 720px) {
    font-size: calc((18 / 720) * 100vw);
    width: calc((77 / 720) * 100vw);
    height: calc((31 / 1280) * 100vh);
    line-height: calc((31 / 1280) * 100vh);
    margin: 0;
  }
`;

const MajorGameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .lankingLeft{
    width : 20%;
  }
  .lankingRight{
    width : 100%;
    text-align : center;
    color : #fff;
    img{
      float : left;
    }
    .beforSale{
      color : #ccc;
      margin-right : 5px;
    }
    .afterSale{
      margin-left : 5px;
    }
  }

  @media (max-width: 1700px) {
    justify-content: center;
  }

  @media (max-width: 1100px) {
    justify-content: space-around;
    margin-right: 30px;
  }
  @media (max-width: 720px) {
    justify-content: center;
    padding: 0 20px 0 0;
    margin: 0;
    .middle {
      height: 100%;
      margin: 0 calc((50 / 720) * 100vw);
    }
  }
`;

const TitmeText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.33px;
  color: #aaa;
  white-space: nowrap;
  @media (max-width: 720px) {
    font-size: calc((22 / 720) * 100vw);
  }
`;

const MajorGameComponent = () => {
  return (
    <MajorGame>
      <Title>랭킹순</Title>
      <div className="web">
        <MajorGameContainer idx="1">
          <MajorGameContents style={{ borderRadius: "12px 12px 0 0" }} idx="1">
            <MajorGameTag background="#19793a">
              <TagText>개</TagText>
            </MajorGameTag>
            <MajorGameWrapper>
              <TeamContainer className='lankingLeft'>
                <img src="/images/cat/사료.jpg" alt=""></img>
              </TeamContainer>
              <div className='lankingRight'>
                <span>어덜트 5kg 소화 건강</span>
                <br></br>
                <del className='beforSale'>40,300</del>
                <IoIosArrowRoundForward></IoIosArrowRoundForward>
                <span className='afterSale'>10,000</span>
              </div>
            </MajorGameWrapper>
          </MajorGameContents>
          <MajorGameContents idx="2">
            <MajorGameContents style={{ borderRadius: "12px 12px 0 0" }} idx="1">
              <MajorGameTag background="#c25a0e">
                <TagText>고양이</TagText>
              </MajorGameTag>
              <MajorGameWrapper>
                <TeamContainer className='lankingLeft'>
                  <img src="/images/cat/사료.jpg" alt=""></img>
                </TeamContainer>
                <div className='lankingRight'>
                  <span>어덜트 5kg 소화 건강</span>
                  <br></br>
                  <del className='beforSale'>35,300</del>
                  <IoIosArrowRoundForward></IoIosArrowRoundForward>
                  <span className='afterSale'>10,000</span>
                </div>
              </MajorGameWrapper>
            </MajorGameContents>
          </MajorGameContents>
          <MajorGameContents idx="3">
            <MajorGameContents style={{ borderRadius: "12px 12px 0 0" }} idx="1">
              <MajorGameTag background="#7a5130">
                <TagText>노견</TagText>
              </MajorGameTag>
              <MajorGameWrapper>
                <TeamContainer className='lankingLeft'>
                  <img src="/images/cat/사료.jpg" alt=""></img>
                </TeamContainer>
                <div className='lankingRight'>
                  <span>어덜트 5kg 소화 건강</span>
                  <br></br>
                  <del className='beforSale'>30,300</del>
                  <IoIosArrowRoundForward></IoIosArrowRoundForward>
                  <span className='afterSale'>10,000</span>
                </div>
              </MajorGameWrapper>
            </MajorGameContents>
          </MajorGameContents>
          <MajorGameContents style={{ borderRadius: "0 0 12px 12px" }} idx="4">
            <MajorGameTag background="#b9b9b9" color="#000000">
              <TagText>노묘</TagText>
            </MajorGameTag>
            <MajorGameWrapper>
                <TeamContainer className='lankingLeft'>
                  <img src="/images/cat/사료.jpg" alt=""></img>
                </TeamContainer>
                <div className='lankingRight'>
                  <span>어덜트 5kg 소화 건강</span>
                  <br></br>
                  <del className='beforSale'>20,300</del>
                  <IoIosArrowRoundForward></IoIosArrowRoundForward>
                  <span className='afterSale'>10,000</span>
                </div>
              </MajorGameWrapper>
          </MajorGameContents>
        </MajorGameContainer>
      </div>
    </MajorGame>
  );
};

export default MajorGameComponent;
