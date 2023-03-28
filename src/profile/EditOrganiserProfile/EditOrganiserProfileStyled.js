import styled from "styled-components";
import {
  LogoPicture,
  BackgroundPicture,
} from "../../event/eventHome/EventHomeStyled";

export const OverallContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fffcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const EditSection = styled.div`
  position: relative;
  width: 40%;
  height: 88%;
  background: #fff;
  border: 2px solid rgba(0, 104, 255, 0.1);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    width: 55%;
  }
  @media screen and (max-width: 960px) {
    width: 58%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const EditHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const WrapLeftArrow = styled.div`
  color: #ff2957;
  cursor: pointer;
`;
export const WrapLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const KCLogo = styled.img`
  height: 2.5rem;
  display: flex;
  justify-content: center;
`;

export const EditLogoPicture = styled(LogoPicture)`
  border: 4px solid #fff;
  border-radius: 30px;
  height: 96px;
  width: 96px;
  top: 65px;
  left: 20px;
`;

export const EditBackgroundPicture = styled(BackgroundPicture)`
  height: 120px;
`;

export const WrapBs = styled.div`
  position: absolute;
  top: 130px;
  left: 82px;
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`;

export const WrapRx = styled(WrapBs)`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
`;

export const EditForm = styled.form`
  /* border: 2px solid red; */
`;

export const ButtonWrapper = styled.section`
  width: 40%;
  height: 10%;
  display: flex;
  padding: 1rem 2rem;
  justify-content: flex-end;
  align-items: center;
  background-color: blue;
  background-color: blue;
  background-color: blue;
  position: fixed;
  top: 42rem;
  margin-left: -2rem;

  @media screen and (max-width: 1200px) {
    width: 55%;
    padding: 1.5rem;
    /* top: 40rem; */
  }
  @media screen and (max-width: 960px) {
    width: 58%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    top: 42rem;
    margin-left: -1.5rem;
  }
`;

export const Messages = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const ErrorMessages = styled.h3`
  color: #ff2957;
  font-size: 14px;
  justify-content: center;
  display: flex;
  margin-top: 0.2rem;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;
