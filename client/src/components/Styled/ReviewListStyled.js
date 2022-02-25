import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  width: 95%;
  height: 50%;
  align: center;
  padding: 10px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  margin: 5px 5px;
  background-color: rgba(255, 255, 255, 0.736);
`

//<ReviewDate>{combinedDate}</ReviewDate>
export const ReviewDate = styled.div`
  text-align: right;
  font-family: Calibre, sans-serif;
  font-style: italic;
  white-space: nowrap;
  padding: 2px;
  font-size: 15px;
  color: #66cc99;
`
//<ReviewPurchaser>Verified Purchaser: {item.reviewer_name}</ReviewPurchaser>
export const ReviewPurchaser = styled.div`
  text-align: right;
  font-family: Calibre, sans-serif;
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
  font-family: Calibre, sans-serif;
  font-size: smaller;
  white-space: nowrap;
  padding: 3px;
`
//<ReviewSummary>Summary: {cappedSummary}</ReviewSummary>
export const ReviewSummary = styled.div`
  font-weight: bold;
  font-family: Calibre, sans-serif;
  font-weight: 10px;
  font-size: 17px;
  overflow: auto;
`
//<ReviewBody>{item.body}</ReviewBody>
export const ReviewBody = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: Calibre, sans-serif;
  overflow: auto;
`
//<Response>{item.response ? `Response from seller: ${item.response}` : ''}</Response>
export const Response = styled.div`
  text-align: center;
  font-family: Calibre, sans-serif;
  background-color: #F0F8FF;
`
//<Helpful onClick={updateHelpful}> Helpful? Yes: {helpful}</Helpful>
export const Helpful = styled.button`
  margin: 0 auto;
  display: block;
  align-items: center;
  height: 30px;
  border: 1px solid black;
  background-color: #ffcba4;
`