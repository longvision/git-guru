import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  min-height: 1020px;

  /* background: #fff; */
`;
export const Ul = styled.ul`
  flex: 1;
  height: 55px;
  padding: 0 20px;
  background: #fff;
  border: 0;
  color: #48285b;
  font-size: 18px;
  border-radius: 3px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 22px;
  margin-top: 15px;
`;
export const SearchBox = styled.div`
  background: #fbfbfb;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  height: 55px;
  background-color: #f2f2f2;

  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;
export const SearchInput = styled.input`
  /* flex: 1;
  padding: 0 20px; */
  background: #fff;

  /* color: #48285b; */
  font-size: 18px;
  border-radius: 3px;
`;
export const List = styled.li`
  color: #fff;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
export const Logo = styled.img`
  height: 250px;
  /* margin-bottom: 15px; */
`;
export const Results = styled.div`
  height: 100%;
`;

export const CommitList = styled.form`
  /* margin-top: 20px;
  width: 100%;
   max-width: 400px; */
  display: flex;
  /* flex: 1; */
  flex-direction: row;

  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  height: 55px;

  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    color: #48285b;
    font-size: 18px;
    border-radius: 3px;
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

    &:hover {
      background: #fff111;
    }
  }
`;

export const Repository = styled.div`
  max-width: 750px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  flex: 1;

  /* padding: 10px; */
  h1 {
    font-size: 28px;
  }

  div {
    flex-direction: row;
    display: flex;

    h2 {
      padding: 40px;
      font-size: 44px;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 100px;
      height: 100px;
      min-width: 125px;
      min-width: 125px;
      border-radius: 100%;
      margin: 25px;
    }
  }

  header {
    padding: 13px;
    font-size: 24px;
    color: #c33;
  }
  strong {
    font-size: 22px;
    padding: 13px;
    color: #c44;
  }
  small {
    font-size: 19px;
    padding: 13px;
    color: #c66;
  }
  h2 {
    margin: 0 25px 15px;
  }
`;
