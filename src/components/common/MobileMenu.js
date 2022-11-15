import React from "react";
import styled from "styled-components";
import MobileFooter from "../common/MobileFooter";
import { useNavigate } from "react-router-dom";
import { IoLogoReddit } from "react-icons/io";

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100 - calc((100 / 1280) * 100vh));
  width: 100vw;
  background-color: #191a19;
  display: flex;
  flex-direction: column;
`;

const MenuListContainer = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
`;

const TopMenuContainer = styled.div`
  background-color: #202221;
  flex: 1 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  padding-top: calc((30 / 1280) * 100vh);
`;

const BottomMenuContainer = styled.div`
  background-color: #202221;
  flex: 2 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  .wrapper {
    width: 100%;
    height: calc((500 / 1280) * 100vh);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContentsContainer = styled.div`
  width: 80%;
  flex: 1 0;
  border-bottom: ${(props) => !props.end && "1px solid #444"};
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
`;

const MenuText = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((28 / 720) * 100vw);
  font-weight: 500;
  line-height: 3.24;
  letter-spacing: -0.43px;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  width: 130px;
  white-space: nowrap;
`;

const Count = styled.div`
  width: calc((60 / 720) * 100vw);
  height: calc((43 / 1280) * 100vh);
  border-radius: 25px;
  background-color: #3b3c3b;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: calc((24 / 720) * 100vw);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  margin-top: 2px;
  transform: skew(-1deg);
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SportTitle = styled.span`
  width: 80%;
  height: 12px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: calc((24 / 720) * 100vw);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #ccc;
  margin-top: calc((20 / 1280) * 100vh);
  margin-bottom: calc((30 / 1280) * 100vh);
`;

const Image = styled.img`
  height: ${(props) => props.height};
  margin-right: calc((18 / 720) * 100vw);
`;

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <MenuListContainer>
        <TopMenuContainer>
          <ContentsContainer
            end="end"
            onClick={() => {
              navigate("/");
              setMobileMenu(false);
            }}
          >   
            <IoLogoReddit className='headerIcon'></IoLogoReddit>
            <MenuText>
              애견인
            </MenuText>
          </ContentsContainer>

          <ContentsContainer
            end="end"
            onClick={() => {
              navigate("/detail");
              setMobileMenu(false);
            }}
          >
            <MenuText>
                  상품 상세
            </MenuText>
          </ContentsContainer>
          
          <ContentsContainer
            end="end"
            onClick={() => {
              navigate("/notice");
              setMobileMenu(false);
            }}
          >
            <MenuText>
                공지 사항
            </MenuText>
          </ContentsContainer>
        </TopMenuContainer>
        <BottomMenuContainer>
        </BottomMenuContainer>
      </MenuListContainer>
      <MobileFooter
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      ></MobileFooter>
    </Wrapper>
  );
};

export default MobileMenu;
