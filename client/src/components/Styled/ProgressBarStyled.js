import styled from 'styled-components';

//<RatingText>Rating Breakdown</RatingText>
export const RatingText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  margin; 20px;
  padding: 5px;
`;

//<BarTitle> Three Star </BarTitle>
export const BarTitle = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  margin; 20px;
  padding: 5px;
`;

//<AverageText> {threeRating}% </AverageText>
export const AverageText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  color: #E9967A;
  line-height: 10px;
`;

//<RecommendText> {recommendPercentageRound}% </RecommendText>
export const RecommendText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  color: #CD5C5C;
  line-height: 10px;
`;

export const TextBar = styled.div`
  border-style: solid;
  width: 90%;
  height: 50%
  align: center;
  padding:10px;
  margin: 30px 15px;
  background-color: #DCDCDC;
`

//rating breakdown styled
export const StarCont = styled.div`
  width: 90%;
  height: 50%
  align: center;
  padding:10px;
  margin: 30px 15px;
`