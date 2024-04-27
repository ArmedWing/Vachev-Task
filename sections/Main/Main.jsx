import { Card } from "../../collections/Card/Card";
import { Video } from "../../components/Video/video";

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
                    <StyledCard>
                        <StyledIcon src="/img/design.png" alt="Brief Icon" />
                        <div>
                        <h3>Brief</h3>
                        <p>Complete brief writing or simple guidance on what to include, we've got you covered.</p>
                        </div>
                    </StyledCard>

                    <StyledCard>
                        <StyledIcon src="/img/presentation2.png" alt="Search Icon" />
                        <div>
                        <h3>Search</h3>
                        <p>In-depth agency search covering, criteria matching, door knocking and due-dilligence vetting.</p>
                        </div>
                    </StyledCard>

                    <StyledCard>
                        <StyledIcon src="/img/meeting.png" alt="Pith Icon" />
                        <div>
                        <h3>Pitch</h3>
                        <p>Comprehensive pitch management, including comms, diary management and pitch hosting.</p>
                        </div>
                    </StyledCard>
                    </StyledCardContainer>

                        </StyledVideoCard>
        </StyledDivSection>
        
    );
};