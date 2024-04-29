// The Card to be exported goes here
import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledIconContainer,
} from "./elements";

export const cardData = [
    {
        icon: "/img/design.png",
        title: "Brief",
        description: "Complete brief writing or simple guidance on what to include, we've got you covered."
    },
    {
        icon: "/img/presentation2.png",
        title: "Search",
        description: "In-depth agency search covering, criteria matching, door knocking and due-dilligence vetting."
    },
    {
        icon: "/img/meeting.png",
        title: "Pitch",
        description: "Comprehensive pitch management, including comms, diary management and pitch hosting."
    },
];


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