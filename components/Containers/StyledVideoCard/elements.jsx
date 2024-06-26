import styled from "styled-components";

export const StyledVideoCard = styled((props) => <div {...props} />)`
display: flex;
flex-direction: row;
align-items: start;
justify-content: center;
margin-top: 60px;

@media (max-width: 1024px){
    flex-direction: column;
    align-items: center;
}
`