import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  border-style: solid;
  border-color: #b3b3b3;
  width: 95%;
  height: 50%;
  align: center;
  padding: 10px;
  padding-left: 5%;
  padding-right: 5%;
  margin: 30px 15px;
  background-color: rgba(255, 255, 255, 0.736);
  border-radius: 25px;
`
//<ReviewDate>{combinedDate}</ReviewDate>
export const ReviewDate = styled.div`
  text-align: right;
  font-family: Georgia;
  font-style: italic;
  white-space: nowrap;
  padding: 2px;
  font-size: 15px;
  color: #66cc99;
`
//<ReviewPurchaser>Verified Purchaser: {item.reviewer_name}</ReviewPurchaser>
export const ReviewPurchaser = styled.div`
  text-align: right;
  font-family: Georgia;
  white-space: nowrap;
  color: #f28500;
  padding: 3px;
  font-size: 15px;
`
/*
<Recommend>
  {item.recommend ? `I recommend this product` : ''}
  {item.recommend ? <FaCheck style={{ 'color': "#00FA9A" }} /> : ''}
</Recommend>
*/
export const Recommend = styled.div`
  text-align: right;
  font-family: Georgia;
  font-size: smaller;
  white-space: nowrap;
  padding: 3px;
`
//<ReviewSummary>Summary: {cappedSummary}</ReviewSummary>
export const ReviewSummary = styled.div`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 17px;
  overflow: auto;
`
//<ReviewBody>{item.body}</ReviewBody>
export const ReviewBody = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: Georgia;
  overflow: auto;
`
//<Response>{item.response ? `Response from seller: ${item.response}` : ''}</Response>
export const Response = styled.div`
  text-align: center;
  font-family: Georgia;
  background-color: #F0F8FF;
`
//<Helpful onClick={updateHelpful}> Helpful? Yes: {helpful}</Helpful>
export const Helpful = styled.button`
  margin: 0 auto;
  display: block;
  align-items: center;
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #ffcba4;
`