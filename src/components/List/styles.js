// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   margin-top: 50px;
// `;
import styled from "styled-components";

export const Repository = styled.div`
  width: 90%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  height: 90px;
  margin: 5px;

  header {
    padding: 0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    flex: 1;

    strong {
      font-size: 26px;
      color: #000;
      max-width: 750px;
    }
    small {
      font-size: 19px;
      color: #666;
      max-width: 750px;
    }
  }
  img {
    width: 64px;
    height: 64px;
    margin: 15px 15px;
  }
`;

export const Loading = styled.span`
  color: #ffe160;
  font-size: 20px;
  padding-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  background: #ffe160;
  border-radius: 3px;
  min-width: 120px;
  margin: 5px 0;
  font-size: 24px;
  height: 90px;
`;

export const Item = styled.ul`
  margin: 25px;
  padding: 25px;
`;

export const Results = styled.div`
  height: 100%;
`;
