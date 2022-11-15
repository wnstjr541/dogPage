import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  /* width: 330px; */
  flex: 330px 0 0;
  background-color: #2c2d2d;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  filter: ${(props) => (props.reportPopup ? "brightness(0.2)" : "")};

  @media (max-width: 1100px) {
    display: none;
  }
`;

const UserReportContainer = styled.div`
  width: 260px;
  height: 158px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #202221;
  position: absolute;
  top: 319px;
  right: 34px;
  z-index: 1000;
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  height: 21px;
  margin: 18px 0 21px;
  /* padding: 0 24px 1px 29px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
`;

const SelectDefault = styled.div`
  width: 220px;
  height: 33px;
  padding: 0px 16px 0px 15px;
  object-fit: contain;
  border-radius: 6px;
  border: solid 1px #333;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 100px; */
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;
`;

const SelectFullContainer = styled.div`
  width: 220px;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
  border: solid 1px #333;
  background-color: #191a1a;
  position: absolute;
`;

const SelectFullTop = styled.div`
  width: 100%;
  height: 33px;
  margin: 1px 0;
  padding: 0px 16px 0px 16px;
  object-fit: contain;
  border-bottom: solid 1px #333;
  background-color: #191a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectContentsWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5px;
`;

const SelectContents = styled.div`
  width: 200px;
  height: 26px;
  object-fit: contain;
  border-radius: 5px;
  padding-left: 10px;
  cursor: pointer;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;

  &:hover {
    background-color: #19793a;
  }
`;

const TabContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #444;
`;

const TabTitle = styled.div`
  height: 16px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #fff;
  margin-left: 7px;
  opacity: ${(props) => props.opacity || 1};
`;

const MenuContainer = styled.div`
  width: 300px;
  height: 17px;
  margin: 17px 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AnnouncementContainer = styled.div`
  width: 299px;
  height: ${(props) => (props.announcement ? "70px" : "42px")};
  padding: 5px 16px 4px 9px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #3b3c3b;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Announcement = styled.div`
  width: 220px;
  height: 100%;
  margin-left: 7px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: -0.35px;
  color: #fff;

  ${(props) =>
    props.announcement
      ? ""
      : css`
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `}
`;

const ChatContainer = styled.div`
  width: 306px;
  height: 911px;
  margin: 10px 0 0 15px;
  object-fit: contain;
  overflow-y: scroll;
  position: relative;
`;

const ChatContents = styled.div`
  width: 300px;
  height: 47px;
  margin: 0 0 6px;
`;

const Class = styled.div`
  width: 16px;
  height: 14px;
  margin: 2px 5px 6px 4px;
  padding: 2px 5px 3px 5px;
  border-radius: 4px;
  background: ${(props) => props.background};
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 12px;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.8);
`;

const ClassText = styled.span`
  height: 11px;
  object-fit: contain;
  margin: 3px 0 8px 0px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 11px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #fff;
  cursor: pointer;
`;

const SeepchBubble = styled.div`
  width: 290px;
  height: 25px;
  padding: 6px 0px 6px 9px;
  border-radius: 5px;
  background-color: #515151;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 12px;
  letter-spacing: -0.35px;
  color: #fff;
`;

const MessegeContainer = styled.div`
  width: 330px;
  height: ${(props) => (props.inputFocus ? "100px" : "56px")};
  padding: 0 0 10px;
  object-fit: contain;
  background-color: #2c2d2d;
  border-top: 1px solid #444444;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: auto;
  position: relative;
`;

const MessegeInput = styled.div`
  width: 264px;
  height: ${(props) => (props.inputFocus ? "72px" : "36px")};
  border-radius: 6px;
  background-color: #202221;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: ${(props) => (props.inputFocus ? "1px solid #099f3c" : "none")};

  img {
    width: 16px;
    margin-right: 10px;
    cursor: pointer;
  }

  &::-webkit-textarea-placeholder {
    opacity: 0.5;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    color: rgba(255, 255, 255, 0.5);
  }
  &::-moz-placeholder {
    opacity: 0.5;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    color: rgba(255, 255, 255, 0.5);
  }
  &:-ms-textarea-placeholder {
    opacity: 0.5;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    color: rgba(255, 255, 255, 0.5);
  }
  &:-moz-placeholder {
    opacity: 0.5;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    color: rgba(255, 255, 255, 0.5);
  }
  textarea::placeholder {
    opacity: 0.5;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 15px;
  }

  textarea:focus::placeholder {
    color: transparent;
  }

  textarea {
    caret-color: #fff;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.33px;
    line-height: 15px;
    color: rgba(255, 255, 255, 0.5);
    margin-left: 15px;
    background: transparent;
    border: none;
    width: 240px;
    overflow: hidden;
    resize: none;
    color: #fff;
    cursor: ${(props) => (props.inputFocus ? "" : "pointer")};

    ${(props) => (props.inputFocus ? "72px" : "18px")}
  }
`;

const ArrowContainer = styled.div`
  width: 39px;
  height: 36px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #202221;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const UserMenuContainer = styled.div`
  width: 84px;
  height: 59px;
  margin: 7px 175px 48px 41px;
  padding: 0px 1px 6px 0;
  object-fit: contain;
  border-radius: 6px;
  border: solid 1px #7d7d7d;
  background-color: #2c2d2d;
  position: absolute;
  top: -10px;
  left: -45px;
  z-index: 1000;
`;

const MenuNickname = styled.span`
  margin: 0px 0px 0px 6px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #099f3c;
`;

const MenuText = styled.p`
  /* margin: 7px 0px 7px 6px; */
  margin-left: 6px;
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 10px;
  letter-spacing: -0.3px;
  color: #fff;
  cursor: pointer;
`;

const RegulationContainer = styled.div`
  width: 300px;
  margin: 40px auto 0 auto;
  background-color: #2c2d2d;
  overflow: hidden;
  overflow-y: auto;
`;

const RegulationContents = styled.div`
  width: 280px;
  margin: 0 18px 38px 0;
  object-fit: contain;
`;

const RegulationTitle = styled.p`
  height: 18px;
  margin: 0 0px 18px 0;
  object-fit: contain;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #fff;
`;

const RegulationText = styled.p`
  margin: 10px 0 0;
  object-fit: contain;
  opacity: 0.7;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
`;

const Rectangle = styled.button`
  width: 280px;
  height: 45px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #19793a;
  margin-top: 38px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 2; */
  letter-spacing: -0.75px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.verification
      ? css`
          background-color: #50504d;
          cursor: default;
        `
      : css`
          &:hover {
            filter: brightness(1.1);
          }
          &:active {
            transform: scale(0.95);
            transition: all 0.1s ease-in-out;
          }
        `}
`;

const ReportRectangle = styled.button`
  width: 100%;
  height: 30px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #19793a;
  margin-top: 10px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 2; */
  letter-spacing: -0.75px;
  text-align: center;
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
`;

const MenuTextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  margin: 2px 2px;
  border-radius: 5px;
  &:hover {
    background-color: #19793a;
  }
`;

const Toast = styled.div`
  * {
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.35px;
    text-align: left;
    color: #fff;
  }

  span {
    margin-right: 5px;
  }

  img {
    width: 17px;
  }
`;

const ToastTop = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff;

  span {
    font-weight: bold;
    color: ${(props) => props.color};
  }

  img {
    width: 36px;
    margin-right: 6px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background-image: url("/images/toast/VIP.png");
    background-size: cover;
    background-position: center;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.6px;
    text-align: left;
    color: #fff;
    margin-right: 6px;
  }
`;

const EmojiContainer = styled.div`
  width: 310px;
  height: 280px;
  object-fit: contain;
  background-color: #202221;
  position: absolute;
  bottom: 50px;
  left: 8px;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, auto));
  grid-template-rows: repeat(auto-fill, minmax(36px, auto));
  row-gap: 15px;
  column-gap: 7px;
`;

const Emoji = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 36px;
  height: 36px;
  margin: auto;
  padding: 6px;
  object-fit: contain;
  border-radius: 6px;
  background-color: #515151;
  position: relative;
  cursor: pointer;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 26px;
  :hover {
    background-color: #161717;
  }

  ${(props) =>
    props.lock &&
    css`
      &::before {
        content: "";
        width: 36px;
        height: 36px;
        background-image: url("/images/chat/lock.png");
        z-index: 2;
        top: 0;
        position: absolute;
        background-size: 14px 15px;
        background-position: center;
        background-repeat: no-repeat;
      }

      &::after {
        content: "";
        display: flex;
        background-color: #515151;
        position: absolute;
        width: 36px;
        height: 36px;
        top: 0;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.5);
        background-size: 14px 15px;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
      }
    `}
`;

const Chat = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [announcement, setAnnouncement] = useState(false);
  const [userMenuIndex, setUserMenuIndex] = useState(-1);
  const [tab, setTab] = useState(1);
  const [reportPopup, setReportPopup] = useState(false);
  const [openSelect, setOpenSelect] = useState({
    open: false,
    text: "신고이유 선택",
  });
  const chatRef = useRef();
  const [isScrollBottom, setIsScrollBottom] = useState(false);
  const [verification, setVerification] = useState(false);
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);

    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (e) => {
    if (
      e.target.className.indexOf("nickname") === -1 &&
      e.target.parentNode.className.indexOf("nickname") === -1
    ) {
      setUserMenuIndex(-1);
    }
  };

  const tmpList = [
    {
      tier: "Bronze",
      nickname: "닉네임",
      text: "채팅내용 ...",
    }
  ];

  const tmpEmojiList = [
    { img: "/images/chat/emoji1.png", lock: false },
    { img: "/images/chat/emoji2.png", lock: true },
    { img: "/images/chat/emoji3.png", lock: false },
    { img: "/images/chat/emoji4.png", lock: false },
    { img: "/images/chat/emoji5.png", lock: false },
  ];

  const tierConversion = (tier) => {
    switch (tier) {
      case "Bronze":
        return ["B", "#9a624e"];
      case "Silver":
        return ["S", "#6690a0"];
      case "Gold":
        return ["G", "#ba963e"];
      case "Platinum":
        return ["P", "#aba349"];
      case "Diamonds":
        return ["D", "#665eb3"];
      case "Admin":
        return ["A", "linear-gradient(to right, #00e03b, #00a4f0);"];
      default:
        return "";
    }
  };

  const scrollToBottom = () => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  const detectBottom = () => {
    const scrollTop = chatRef.current?.scrollTop;
    const clientHeight = chatRef.current?.clientHeight;
    const scrollHeight = chatRef.current?.scrollHeight;
    setIsScrollBottom(scrollTop + clientHeight >= scrollHeight);
  };

  const TopToastPopup = () => {
    toast(
      <ToastTop color="#18e25d">
        <p>
          <span>...</span>님이 채팅방에 입장하셨습니다.
        </p>
      </ToastTop>,
      {
        position: "top-right",
        icon: false,
        className: "toast-enter",
      }
    );

    toast(
      <ToastTop color="#bc7bff">
        <img src="/images/toast/message-pupple.png" alt=""></img>
        <p>
          확성기 메시지 내용
        </p>
      </ToastTop>,
      {
        position: "top-right",
        icon: false,
        className: "toast-message",
      }
    );
  };

  useEffect(() => {
    TopToastPopup();
  }, []);

  return (
    <>
      {reportPopup && (
        <UserReportContainer>
          <TitleContainer>
            <Title>유저 신고하기</Title>
            <img
              src="/images/common/Close.png"
              alt=""
              style={{ width: "13px", height: "12px", cursor: "pointer" }}
              onClick={() => setReportPopup(false)}
            ></img>
          </TitleContainer>
          {openSelect.open ? (
            <SelectFullContainer>
              <SelectFullTop
                onClick={() => setOpenSelect({ ...openSelect, open: false })}
                style={{ borderRadius: "6px 6px 0 0" }}
              >
                <SelectText>{openSelect.text}</SelectText>
                <img
                  src="/images/chat/ArrowDown.png"
                  alt=""
                  style={{ width: "10px", height: "5px", cursor: "pointer" }}
                  // onClick={() => setRankingModal(false)}
                ></img>
              </SelectFullTop>
              <SelectContentsWrapper>
                <SelectContents
                  onClick={() => setOpenSelect({ open: false, text: "욕설" })}
                >
                  욕설
                </SelectContents>
                <SelectContents
                  onClick={() =>
                    setOpenSelect({ open: false, text: "거짓중계" })
                  }
                >
                  거짓중계
                </SelectContents>
                <SelectContents
                  onClick={() => setOpenSelect({ open: false, text: "비매너" })}
                >
                  비매너
                </SelectContents>
                <SelectContents
                  onClick={() => setOpenSelect({ open: false, text: "도배" })}
                >
                  도배
                </SelectContents>
              </SelectContentsWrapper>
            </SelectFullContainer>
          ) : (
            <SelectDefault
              onClick={() => setOpenSelect({ ...openSelect, open: true })}
            >
              <SelectText>{openSelect.text}</SelectText>
              <img
                src="/images/chat/ArrowDown.png"
                alt=""
                style={{ width: "10px", height: "5px", cursor: "pointer" }}
                // onClick={() => setRankingModal(false)}
              ></img>
            </SelectDefault>
          )}
          <ReportRectangle>채팅신고하기</ReportRectangle>
        </UserReportContainer>
      )}
      <Wrapper reportPopup={reportPopup}>
        <TabContainer>
          <div
            style={{
              width: "110px",
              height: "56px",
              display: "flex",
              alignItems: "flex-start",
              paddingTop: "20px",
              borderBottom: `${tab === 1 ? "2px solid #099f3c" : ""}`,
              cursor: "pointer",
            }}
            onClick={() => setTab(1)}
            opacity={tab !== 1 ? 0.7 : 1}
          >
            <img
              src="/images/chat/ChatBubble.png"
              alt=""
              style={{
                width: "24px",
                height: "21px",
                opacity: `${tab !== 1 ? 0.7 : 1}`,
              }}
            ></img>
            <TabTitle>공개 채팅방</TabTitle>
          </div>
          <div
            style={{
              width: "110px",
              height: "56px",
              display: "flex",
              alignItems: "flex-start",
              borderBottom: `${tab === 2 ? "2px solid #099f3c" : ""}`,
              paddingTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => setTab(2)}
            opacity={tab !== 2 ? 0.7 : 1}
          >
            <img
              src="/images/chat/Regulation.png"
              alt=""
              style={{
                width: "17px",
                height: "17px",
                opacity: `${tab !== 2 ? 0.7 : 1}`,
              }}
            ></img>
            <TabTitle>채팅방 규정</TabTitle>
          </div>
        </TabContainer>
        {tab === 1 && (
          <>
            <MenuContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/chat/Human.png"
                  alt=""
                  style={{ width: "17px", height: "17px" }}
                ></img>
                <span
                  style={{
                    width: "60px",
                    height: "16px",
                    marginLeft: "8px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "16px",
                    letterSpacing: "normal",
                    color: "#fff",
                    transform: "skew(-0.1deg)",
                  }}
                >
                  108명
                </span>
              </div>
            </MenuContainer>
            <AnnouncementContainer
              announcement={announcement}
              onClick={() => setAnnouncement(!announcement)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/chat/Loudspeaker.png"
                  alt=""
                  style={{ width: "33px", height: "33px" }}
                ></img>
                <Announcement announcement={announcement}>
                  공지를 안내해드립니다 
                </Announcement>
              </div>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/images/chat/ArrowDown.png"
                  alt=""
                  style={{
                    width: "13px",
                    height: "7px",
                    transform: `${
                      announcement ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                    transition: "transform 0.2s linear",
                  }}
                ></img>
              </div>
            </AnnouncementContainer>
            <ChatContainer
              ref={chatRef}
              onScroll={detectBottom}
              announcement={announcement}
            >
              {[...tmpList, ...tmpList, ...tmpList, ...tmpList, ...tmpList].map(
                (item, idx) => (
                  <>
                    <ChatContents>
                      <div style={{ display: "flex" }}>
                        <Class background={tierConversion(item.tier)[1]}>
                          {tierConversion(item.tier)[0]}
                        </Class>
                        <ClassText
                          style={{ position: "relative" }}
                          onClick={() => setUserMenuIndex(idx)}
                          className="nickname"
                        >
                          닉네임
                          {userMenuIndex === idx && (
                            <UserMenuContainer className="nickname">
                              <MenuNickname className="nickname">
                              닉네임
                              </MenuNickname>
                              <div
                                style={{
                                  width: "100%",
                                  height: "40px",
                                  borderTop: "solid 1px #7d7d7d",
                                }}
                                className="nickname"
                              >
                                <MenuTextContainer>
                                  <MenuText
                                    className="nickname"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setUserMenuIndex(-1);
                                      setReportPopup(true);
                                      setOpenSelect({
                                        open: false,
                                        text: "신고이유 선택",
                                      });
                                    }}
                                  >
                                    채팅 신고하기
                                  </MenuText>
                                </MenuTextContainer>
                                <MenuTextContainer>
                                  <MenuText className="nickname">
                                    채팅 안보기
                                  </MenuText>
                                </MenuTextContainer>
                              </div>
                            </UserMenuContainer>
                          )}
                        </ClassText>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="/images/chat/ArrowLeft.png"
                          alt=""
                          style={{ width: "5px", height: "8px" }}
                        ></img>
                        <SeepchBubble>{item.text}</SeepchBubble>
                      </div>
                    </ChatContents>
                  </>
                )
              )}
            </ChatContainer>
          </>
        )}
        {tab === 2 && (
          <>
            <RegulationContainer>
              <RegulationContents
                style={{ borderBottom: "1px solid #444", height: "358px" }}
              >
                <RegulationTitle>
                  채팅차단이 되는 경우(차단수위)
                </RegulationTitle>
                <RegulationText>
                  1. 욕설/싸움/기타 비매너 행위(15일차단)
                </RegulationText>
                <RegulationText>
                  2. 저작권위반,까페,블로그,카톡 링크(영구차단)
                </RegulationText>
                <RegulationText>
                  3. 운영진 비방 및 욕설(영구차단)
                </RegulationText>
                <RegulationText>
                  4. 국내 타 스코어 사이트 명시,링크(영구차단)
                </RegulationText>
                <RegulationText>
                  5. 의도적인 스코어 거짓중계(영구차단)
                </RegulationText>
                <RegulationText>
                  6. 일반,낚시성 거짓중계(30일차단)
                </RegulationText>
                <RegulationText>
                  7. 타회원 부모,가족욕설(아이디 삭제/형사 고소 협조)
                </RegulationText>
                <RegulationText></RegulationText>
                <RegulationText></RegulationText>
              </RegulationContents>
              <RegulationContents style={{ height: "300px" }}>
                <RegulationTitle>
                  대화가 금지되는 경우 (금지시간)
                </RegulationTitle>
                <RegulationText>1. 도배(60분)</RegulationText>
                <RegulationText>
                  2. ㄹㄷ어ㅇㅁ 같은 무의미한 단어반복(30분)
                </RegulationText>
                <RegulationText>
                  3. 관심을 끌기위한 대화반복(15분)
                </RegulationText>
                <Rectangle
                  onClick={() => setVerification(true)}
                  verification={verification}
                >
                  <span>네, 알겠습니다</span>
                </Rectangle>
              </RegulationContents>
            </RegulationContainer>
          </>
        )}

        <MessegeContainer inputFocus={inputFocus}>
          <MessegeInput inputFocus={inputFocus}>
            <textarea
              rows={inputFocus ? 2 : 1}
              inputFocus={inputFocus}
              placeholder="메시지 보내기"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              onKeyDown={(e) => {
                if (e.shiftKey && e.key === "Enter") {
                } else if (e.key === "Enter") e.preventDefault();
              }}
            ></textarea>
            <img
              src="/images/chat/smile.png"
              alt=""
              onClick={() => setEmoji(!emoji)}
            ></img>
          </MessegeInput>

          <ArrowContainer >
            <img
              src="/images/chat/SendMessege.png"
              alt=""
              style={{ width: "18px", height: "18px" }}
            ></img>
          </ArrowContainer>
          {emoji && (
            <EmojiContainer>
              {[
                ...tmpEmojiList,
                ...tmpEmojiList,
                ...tmpEmojiList,
                ...tmpEmojiList,
                ...tmpEmojiList,
                ...tmpEmojiList,
              ].map((item) => (
                <Emoji img={item.img} lock={item.lock}></Emoji>
              ))}
            </EmojiContainer>
          )}
        </MessegeContainer>
      </Wrapper>
    </>
  );
};

export default Chat;
