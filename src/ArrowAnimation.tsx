import "./ArrowAnimation.css";
import Arrow from "/icons/arrow_icon.svg";
import Icon from "./style_components/Icon";
import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import useScrollToSection from "./hooks/useScrollToSection";

const ArrowIcon = styled(Icon)`    
transform: rotate(180deg);
cursor: pointer;
`;

type Props = {
    venueReference: React.RefObject<HTMLDivElement>;
};

const ArrowAnimation = (props: Props) => {

    const [, , scrollToSection] = useScrollToSection();

    return (
        <FlexContainer onClick={() => scrollToSection(props.venueReference)} animation="bounce 1.5s infinite">
            <ArrowIcon src={Arrow} size="5.5em" mobileSize="9vh" />
        </FlexContainer>
    );
};

export default ArrowAnimation;