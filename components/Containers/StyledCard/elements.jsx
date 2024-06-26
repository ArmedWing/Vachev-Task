import styled from "styled-components";

export const StyledCard = styled((props) => <div {...props}/>)`
display: flex; 
align-items: center;
justify-content: flex-start;
margin-bottom: 10px;
padding: 20px; 
border: 2px solid transparent; 
border-radius: 10px; 
width: 500px;
height: 150px;
background-color: #f9f8f8;

@media (max-width: 1024px){
    width: 90%;
}
`