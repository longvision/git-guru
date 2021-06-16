import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  min-height: 1020px;
  background-color: #48285b;
  flex: 1;
`;
export const Logo = styled.img`
  height: 250px;
  margin-bottom: 1px;
`;
export const Results = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 550px;
  /* display: flex; */

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    color: #48285b;
    font-size: 18px;
    border-radius: 3px;
    min-width: 300px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #ffe162;
    color: #48285b;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    flex: 1;
    &:hover {
      background: #fff111;
    }
  }
`;
