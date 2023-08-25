import styled from "styled-components"
import { ReactComponent as TopArrow } from "../../assets/img/icon-top-arrow.svg";
import { useState, useEffect } from "react";

export default function TopButton({elementRef}) {

  const [scrolling, setScrolling] = useState();

  const handleScrollToTop = () => {
    if (elementRef.current) {
      elementRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      if (element) {
        setScrolling(element.scrollTop > 500)
      }
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

  return (
    <>
    {
      scrolling &&
      <DarkModeBtnContainer scrolling={scrolling} onClick={handleScrollToTop}>
        <DarkModeBtnStyle>
          <TopArrow />
        </DarkModeBtnStyle>
      </DarkModeBtnContainer> 
    }
    </>
  )
}

const DarkModeBtnContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--basic-width);
  height: var(--basic-height);
  transition: opacity 0.3s;
  opacity: ${({ scrolling }) => (scrolling ? 1 : 0)};
  animation: visible 0.3s ease forwards;

  @keyframes visible {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }

  @media ((min-width: 768px) and (max-width: 1500px)) {
    /* WebFollowersRecommend 컴포넌트 너비/2 만큼 옆으로 밀어줌 */
    margin-left: 196px;
  }
`;

const DarkModeBtnStyle = styled.button`
  pointer-events: auto;
  position: absolute;
  bottom: 90px;
  right: 30px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--basic-color-1);
`;