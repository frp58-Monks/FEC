import styled from 'styled-components';

//<RatingText>Rating Breakdown</RatingText>
export const RatingText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 20px;
  margin; 20px;
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
  color: #ff8243;
  text-align: center;
`;

//<RecommendText> {recommendPercentageRound}% </RecommendText>
export const RecommendText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  color: #CD5C5C;
  text-align: center;
`;

//container for progress bar
export const TextBar = styled.div`
  width: 95%;
  height: 50%
  align: center;
  padding:10px;
  margin: 30px;
  background-color: rgba(255, 255, 255, 0.736);
`
//rating breakdown styled
export const StarCont = styled.div`
  width: 90%;
  height: 50%
`

export const SharedStarText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 20px;
  white-space: nowrap;
  margin: 20px;
  padding: 5px;
  color: #ff8243;
`

//Justin's stars
export const JCont = styled.div`
  width: 90%;
  height: 20%
  align: center;
`

export const JText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 15px;
  color: #ff8243;
`