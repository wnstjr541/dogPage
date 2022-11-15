import React, { useEffect } from 'react';
import { useState } from 'react';
import Slider from '../components/common/Slider';
import "./Detail.css"
import { ImStarFull } from "react-icons/im";
import { SlPlus , SlMinus } from "react-icons/sl";
import Footer from '../components/common/Footer';
import { IoIosArrowRoundForward } from "react-icons/io";

const Detail = () => {
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const [type, setType] = useState("상품정보")
    const [totalSale, setTotalSale] = useState(34000)
    const [totalCount, setTotalCount] = useState(1)


    const handlePlusClick = () => {
        if(totalSale > -1){
            setTotalSale(totalSale + 34000)
            setTotalCount(totalCount + 1)
        }
    }
    const handleMinusClick = () => {
        if(totalSale !== 0){
            setTotalSale(totalSale - 34000)
            setTotalCount(totalCount - 1)
        }
    }

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
    let result = totalSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <>
                <section className='detailWarp'>
                    <div className='detailContainer'>
                        <div className='detailLeft'>
                            <Slider type="detail"></Slider>
                        </div>
                        <div className='detailRight'>
                            <div>
                                <div>제품 소개글</div>
                                <h2>흡수가 잘되는 패드 100매</h2>
                                <div className='rightSale'>
                                    <span>20%</span>
                                    <del>41,000원</del>
                                    <IoIosArrowRoundForward style={{paddingTop : "5px"}}></IoIosArrowRoundForward>
                                    <span>34,000원</span>
                                </div>
                            </div>
                            <div>
                                <div className='buttonContainer'>
                                    <span>수량</span>
                                    <br />
                                    <button className='plusButton' onClick={() => handlePlusClick()}>
                                        <SlPlus></SlPlus>
                                    </button>
                                    <input type="text" value={totalCount} />
                                    <button className='minusButton' onClick={()=> handleMinusClick()}>
                                        <SlMinus></SlMinus>
                                    </button>
                                </div>
                                <div className='saleContainer'>
                                    <div>총 가격</div>
                                    <span>{result} 원</span>
                                </div>
                            </div>
                            <button className='saleButton'>구매하기</button>
                        </div>
                    </div>
                    <article className='navBar'>
                        <ul>
                            <li onClick={() => setType("상품정보")}>상품 정보</li>
                            <li onClick={() => setType("구매후기")}>구매 후기</li>
                            <li onClick={() => setType("교환/취소")}>교환/취소 안내</li>
                        </ul>
                    </article>
                    <div className='detailDataContainer'>
                        {
                            type === "상품정보" && 
                            <section className='infoContainer'>
                                <h2>상품 정보</h2>
                                <div className='infoTopContainer'>
                                    <div>
                                        <h2>설명</h2>
                                        <span>
                                            고흡수 소재를 이용해 빠른 흡수력을 이용하며, 대형견부터 소형견까지 무리없이 사용할수 있습니다. 피부질환 걱정없이 사용할수 있도록 여러 테스트를 통과했습니다. 개봉후 배변 유도제 성분의 향이 날아갈수 있기에 6개월안에 사용하기를 권장드립니다.
                                        </span>
                                    </div>   
                                    <div>
                                        <h2>특징</h2>
                                        <ul>
                                            <li>- 호주산 천연 펄프 사용</li>
                                            <li>- 고흡수 재질로 대형견까지 무리없이</li>
                                            <li>- 저렴한 가격</li>
                                            <li>- 친환경 배변 유도제</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='infoMidContainer'>
                                    <img src="/images/dog/애견패드.jpg" alt="" />
                                </div>
                            </section>
                        }
                        {
                            type === "구매후기" && 
                            <section className='reviewContainer'>
                                <div className='starContainer'>
                                    <h2>구매후기</h2>
                                    <div className='Stars'>
                                        {
                                            array.map((el) => (
                                                <ImStarFull
                                                    key={el}
                                                    onClick={()=> handleStarClick(el)}
                                                    className={clicked[el] === true ? 'yellow' : 'black'}
                                                    size="35"
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='inputTitle'>
                                    <label htmlFor="name">제목</label>
                                    <input type="text" placeholder='제목을 입력해주세요' />
                                </div>
                                <div className='inputInfo'>
                                    <label htmlFor="name">내용</label>
                                    <textarea type="text" placeholder='내용을 입력해주세요' />
                                </div>
                                <div className='inputButton'>
                                    <button>등록</button>
                                    <button>취소</button>
                                </div>
                            </section>
                        }
                        {
                            type === "교환/취소" && 
                            <section className='cancleContainer'>
                                <h1>취소/교환/반품 안내</h1>
                                <div>
                                    <h4>취소</h4>
                                    <ul>
                                        <li>- 상품 배송 시작 전에만 취소 가능 합니다.</li>
                                    </ul>
                                </div>
                            </section>
                        }
                    </div>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Detail;