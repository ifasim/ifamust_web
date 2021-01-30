import styled from 'styled-components';


//main page
export const ContainerMain = styled.div`
display: flex;



  @media screen and (max-width: 768px) {
    height: 2900px;
  }

  @media screen and (max-width: 480px) {
    height: 3200px;
  }
`;

//main 
export const DivMainSidebar = styled.div`

  // background-color: #f9f9f9;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 0.20;
  height: 100vh;
  padding-top: 90px;
  text-align: center;
`;

export const DivMainRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.80;
  height: 100vh;
  padding-top: 90px;

`;

//products

export const Container = styled.div`
  height: 1150px;
  display: flex;
  flex-direction: column;


  background: #fff;

  @media screen and (max-width: 768px) {
    height: 2900px;
  }

  @media screen and (max-width: 480px) {
    height: 3200px;
  }
`;
//

export const ProdWrapper = styled.div`
  max-width: 1000px;
  // margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-top: 50px;
  

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Img = styled.div`
 
  width: 300px;
  max-height: 100px;
  // margin: 0px 16px;


  // background: #fff;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: center;
  // border-radius: 10px;
  // max-height: 700px;
  // padding: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;






