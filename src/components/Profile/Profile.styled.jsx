import styled from '@emotion/styled'

export const ProfileCard = styled.div`
  padding-top: 20px;
  width: 300px;
  background-color: rgb(255, 240, 80);
  border-radius: 10px; 
`;

export const Avatar = styled.img`
  margin-left: 90px;
  width: 120px;
  height: 100%;
  background-color: green;
  border-radius: 50%;
`;

export const Statistics = styled.ul`
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  list-style: none;
  background-color: aqua;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: green;
  text-align: center;
  margin: 0;
  margin-top: 8px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  margin-top: 8px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Location = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 8px;
`;
