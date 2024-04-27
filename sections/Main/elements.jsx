import styled from "styled-components";
import { SectionBigHeading, SectionSubheading, DivSection, CardContainer, MainContainer, StyleCard, StyleVideoCardContainer, StyleIcon} from "~/components";


export const StyledVideoContainer = styled(({ ...props }) => <div {...props} />)`  
width: 55%;
height: auto;
flex: 0 0 auto; 
margin-right: 20px;
`;


export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
color: black;
margin-bottom: 0px;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin-bottom: 0;
`;

export const StyledDivSection = styled((props) => <DivSection {...props} />)`
background-image: url(/img/background.png);  
`;

export const StyledCardContainer = styled((props) => <CardContainer {...props}/>)`
margin-top: 25px;
margin-left: 50px;
`

export const StyledMainSection = styled((props) => <MainContainer {...props}/>)`

`

export const StyledCard = styled((props) => <StyleCard {...props}/>)`
font-family: Helvetica;
font-size: 17px;
text-align: left;
margin-bottom: 30px;
flex: 1;

&:hover {
    border: solid;
    border-color: #2774da;
    border-width: 2px;
}
&:hover h3 {
    color: #2774da;
    text-decoration: underline;
}
`

export const StyledVideoCard = styled((props) => <StyleVideoCardContainer {...props}/>)`

`
export const StyledIcon = styled((props) => <StyleIcon {...props}/>)`

`





