import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoLogoReddit } from "react-icons/io";

const Wrapper = styled.div`
  /* width: ${(props) => (props.openSidebar ? "200px" : "48px")}; */
  height: 100vh;
  flex: ${(props) => (props.openSidebar ? "0 0 240px" : "0 0 48px")};
  display: ${(props) => (props.fullScreen ? "none" : "block")};

  @media (max-width: 1100px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: rgba(22, 23, 23, 1.1);
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  span:active {
    transform: scale(0.95);
  }
  span {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size : 18px;
    margin-left : 5px;
    color : #fff;
  }
  .headerIcon{
    text-align: center;
    font-size : 20px;
    color : #fff;
  }
`;

const Boundary = styled.div`
  height: 16px;
  background: linear-gradient(#0c0d0d, #161717);
`;

const NavigationContainer = styled.div`
  height: calc(100% - 56px - 16px);
  background-color: #161717;
  padding: 0 10px;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const Count = styled.div`
  width: 35px;
  height: 25px;
  border-radius: 12.5px;
  background-color: #3b3c3b;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  margin-top: 2px;
  transform: skew(-1deg);
`;

const MenuContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    button {
      color: rgba(255, 255, 255, 1);
    }
    ${Count} {
      background-color: #000;
    }
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
`;

const MenuText = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 3.24;
  letter-spacing: -0.43px;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  width: 130px;
`;

const OnoffButton = styled.div`
  width: 34px;
  height: 34px;
  background-color: #2c2d2d;
  border-radius: 25px;
  position: absolute;
  top: 12px;
  left: ${(props) => (props.openSidebar ? "222px" : "30px")};
  display: flex;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
  z-index: 100000;
`;

const Arrow = styled.div`
  &::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-left: ${(props) => (props.openSidebar ? "15px" : "13px")};
    margin-top: 14px;
    border-top: 1.9px solid #fff;
    border-right: 1.9px solid #fff;
    transform: ${(props) =>
      props.openSidebar ? "rotate(225deg)" : "rotate(45deg)"};
    transition: transform 0.2s linear;
  }
`;

const CloseSidebarContainer = styled.div`
  height: calc(100% - 56px - 16px);
  background-color: #161717;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseSidebarIcon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }
`;

const Sidebar = ({ openSidebar, setOpenSidebar, fullScreen ,sportsType, setSportsType}) => {
  const navigate = useNavigate();

  return (
    <Wrapper openSidebar={openSidebar} fullScreen={fullScreen}>
      <OnoffButton
        openSidebar={openSidebar}
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <Arrow openSidebar={openSidebar}></Arrow>
      </OnoffButton>
      {!openSidebar && (
        <>
          <LogoContainer onClick={() => navigate("/")}></LogoContainer>
          <Boundary />
          <CloseSidebarContainer>
           
          </CloseSidebarContainer>
        </>
      )}
      {openSidebar && (
        <>
          <LogoContainer onClick={() => navigate("/")}>
            <IoLogoReddit className='headerIcon'></IoLogoReddit>
            <span>
              애견인
            </span>
          </LogoContainer>
          <Boundary />
          <NavigationContainer>
            <MenuContainer>
              <MenuContents>
                <MenuText onClick={() =>
                {
                  navigate("/detail");
                } 
              }>
                  상품 상세
                </MenuText>
              </MenuContents>
              <MenuContents>
                <MenuText onClick={() =>
                {
                  navigate("/notice");
                } 
              }>
                  공지 사항
                </MenuText>
              </MenuContents>
            </MenuContainer>
          </NavigationContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Sidebar;
