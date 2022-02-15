import styled from 'styled-components';

export const StarStyled = styled.div`
  display: inline-flex;
  color: grey;
  width: 20px;
  padding: 2px;

  &:hover {
    color: gold;
  }

  input[type="radio"] {
    display: none;
  }
`

export const StarBorder = styled.div`
  border-style: solid;
  width: 11%;
  margin: 1px;
`

export const StarText = styled.p`
  float: left;
`

export const QuarterStar = styled.span`
display: inline-flex;
color: grey;
fill: Red;


&:fill {
  content: "\f005";
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  overflow: hidden;
  color: #f80;
}
`