import styled from "styled-components";

export const StyledDivSection = styled((props) => <div {...props}/>)`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 20px;

@media (max-width: 1024px){
    background-position: 20% 35%;
}
`;