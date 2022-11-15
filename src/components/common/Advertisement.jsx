import React from 'react';
import styled from "styled-components";
import GuaranteeCompanySlider from '../slider/CatSlider';

const AssuranceContainer = styled.div`
    height: fit-content;
    padding: 0 45px 0 43px;
    margin-bottom: 40px;
    @media (max-width: 1100px) {
        padding: 0 30px 0 40px;
        margin-bottom: 40px;
    }
    @media (max-width: 720px) {
        padding: 0;
        margin-bottom: calc((40 / 1280) * 100vh);
        height: max-content;
        .title {
        padding: 0 calc((40 / 720) * 100vw);
        }
    }
`;

const AssuranceTitmeContainer = styled.div`
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

const AssuranceText = styled.p`
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
const Advertisement = () => {
    return (
        <AssuranceContainer>
            <AssuranceTitmeContainer className="title">
                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
                >
                <img
                    className="icon"
                    src="/images/main/Sidebar4.png"
                    alt=""
                ></img>
                <AssuranceText style={{ marginLeft: "7px" }}>
                    고양이
                </AssuranceText>
                </div>
            </AssuranceTitmeContainer>
            <GuaranteeCompanySlider />
        </AssuranceContainer>
    );
};

export default Advertisement;