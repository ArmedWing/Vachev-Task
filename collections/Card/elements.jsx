// Styled elements for the Card go here
import styled from "styled-components";
import { SectionBigHeading, SectionSubheading, SectionContainer } from "~/components";

export const StyledIconContainer = styled((props) => <SectionContainer {...props}/>)`
margin: 0;
`

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin: 1.563rem 0 0;
`;

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    align-items: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    width: 30%;
    margin-left: 11.125rem;
    font-family: sans-serif;
`;