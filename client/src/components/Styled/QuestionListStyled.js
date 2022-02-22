import styled from 'styled-components';

export const QuestionSummary = styled.div`
  font-weight: bold;
  font-family: Georgia;
  font-weight: 10px;
  font-size: 17px;
  overflow: auto;
`

export const QuestionWrapper = styled.div`
  border-style: solid;
  width: 50%;
  align: center;
  padding:10px;
  margin: 30px 15px;
  background-color: #DCDCDC;
`

export const QuestionBody = styled.div`
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-family: Georgia;
  overflow: auto;
`

export const QuestionDate = styled.div`
  text-align: right;
  font-family: Georgia;
  font-style: italic;
  padding: 2px;
  font-size: 15px;
`

export const QuestionAsker = styled.div`
  text-align: right;
  font-family: Georgia;
  color: green;
  padding: 3px;
  font-size: 15px;
`

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`
