import styled from 'styled-components';

export const Container = styled.div`
  progress[value] {
    width: 40%
    appearance: none;

    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 20px;
      background-color: #F0F8FF;
    }

    ::webkit-progress-value {
      height: 10px;
      border-radius: 20px;
      background-color: #9932CC;
    }
  }
`;

export const BarTitle = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
`;

export const AverageText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  color: #E9967A;
`;