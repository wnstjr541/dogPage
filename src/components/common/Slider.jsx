import React from 'react';
import GuaranteeCompanySlider from '../slider/CatSlider';
import styled from "styled-components";
import CatSlider from '../slider/CatSlider';
import DogSlider from '../slider/DogSlider';
import DogFood from '../slider/DogFood';
import DetailSale from '../slider/DetailSale';
import { IoAmericanFootballOutline } from "react-icons/io5";

const AssuranceContainer = styled.div`
    height: auto;
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

const TitleContainer = styled.div`
    width: 100%;
    margin-top : 10px;
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div .icon {
        width: 20px;
        height: auto;
        color : #fff;
        margin-left : 10px;
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


const Slider = ({type}) => {
    return (
        <AssuranceContainer>
            <TitleContainer className="title">
                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
                >
                <IoAmericanFootballOutline className='icon'></IoAmericanFootballOutline>
                <Title style={{ marginLeft: "7px" }}>{type === "cat" ? "인기 산책 용품" : (type === "dog" ? "사료" : "배변 용품") }</Title>
                </div>
            </TitleContainer>
            {type === "cat" ?
            <CatSlider type={type} />
            :
            (type === "dog" ?
            <DogSlider></DogSlider>
            :
                (
                    type === "dogFood" ?
                    <DogFood></DogFood>
                    :
                    <DetailSale></DetailSale>
                )
            )
            }
        </AssuranceContainer>
    );
};

export default Slider;