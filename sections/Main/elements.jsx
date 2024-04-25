import styled from "styled-components";
import { SectionBigHeading, SectionSubheading } from "~/components";


export const StyledVideoContainer = styled(({ ...props }) => <div {...props} />)`    
    width: 25%;
    height: auto;    
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin: 1.563rem 0 0;
`;