import styled from "styled-components";

export const H3Wrapper = styled.span`
  margin: 0px;
  font-size: 26px;
  color: #3d5170;
  letter-spacing: 0.05rem;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpanWrapper = styled.div`
  color: #818ea3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .up{
    width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-bottom: 5px solid green;
    margin: 5px;
 }
 .down{
    width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid red;
    margin: 5px;
}
`;

export const HeaderFlexers=styled.div`
display: flex;
justify-content: center;
align-items: center;

`
