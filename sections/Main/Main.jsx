import { Video } from "../../components/Video/video";
import { cardData } from "../../collections/Card"

import {
    StyledTitle,
    StyledDescription,
    StyledVideoContainer,
    StyledDivSection,
    StyledCardContainer,
    StyledMainSection,
    StyledCard,
    StyledVideoCard,
    StyledIcon,
} from "./elements";

export const Main = ({ image, title, description}) => {
    return (
        <StyledDivSection>
            <StyledMainSection>            
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledMainSection>

            <StyledVideoCard>
                <StyledVideoContainer>
                    <Video image={image}/>
                </StyledVideoContainer>

                <StyledCardContainer>
                    {cardData.map((card, index) => (
                    <StyledCard key={index}>
                        <StyledIcon src={card.icon} alt={`${card.title} Icon`} />
                        <div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </StyledCard>
                    ))}
                </StyledCardContainer>

                        </StyledVideoCard>
        </StyledDivSection>
        
    );
};