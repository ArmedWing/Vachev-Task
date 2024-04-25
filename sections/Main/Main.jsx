import { Video } from "../../components/Video/video";

import {
    StyledVideContainer,
} from "./elements";

export const Main = ({image}) => {
    return (
        <StyledVideContainer>
            <Video image={image}/>
        </StyledVideContainer>
    
    );
};