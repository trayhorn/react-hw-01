import styled from '@emotion/styled'

export const Section = styled.section`
  width: 300px;
  background-color: rgb(255, 240, 80);
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;



export const Item = styled.li`
  font-size: 14px;
  width: calc(100% / 4);
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
