import styled from 'styled-components';

//<RatingText>Rating Breakdown</RatingText>
export const RatingText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 20px;
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
  color: #6c3082;
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
  border-style: solid;
  width: 95%;
  height: 50%
  align: center;
  padding:10px;
  margin: 30px 15px;
  background-color: #e6e8fa;
  border-radius: 25px;
`

//rating breakdown styled
export const StarCont = styled.div`
  width: 90%;
  height: 50%
  align: center;
`
// padding:10px;
// margin: 30px 15px;

export const SharedStarText = styled.span`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 25px;
  margin; 20px;
  padding: 5px;
  color: #6c3082;
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
  color: #6c3082;
`