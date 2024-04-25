import { Card } from "../../collections/Card/Card";
import { Video } from "../../components/Video/video";

import {
    StyledTitle,
    StyledDescription,
    StyledVideoContainer,
} from "./elements";

export const Main = ({icon, image, title, description}) => {
    return (
        <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledVideoContainer>
                <Video image={image}/>
            </StyledVideoContainer>
            
            <Card icon="/img/design+2.png" title="Brief" description="Complete brief writing or simple guidance on what to include, we've got you covered."/>
            <Card icon="/img/presentation.png" title="Search" description="In-depth agency search covering, criteria matching, door knocking and due-dilligence vetting."/>
            <Card icon="/img/meeting.png" title="Pith" description="Comprehensive pith management, including comms, diary management and pitch hosting."/>
        </div>
        
    );
};