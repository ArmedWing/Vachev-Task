// The Card to be exported goes here
import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledIconContainer,
} from "./elements";

export const Card = ({icon, title, description}) => {
    return (
        
        <StyledContainer>
            <StyledIconContainer><img src={icon}></img></StyledIconContainer>
            <StyledTextContainer>                
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
        </StyledContainer>
    )
}