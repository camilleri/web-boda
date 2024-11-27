import "./Banner.css";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";

function Banner() {
  return (
    <div className="banner-img">
      <Spacer top="88px" />
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="10vw" fontWeight="600">
          Maria + David
        </Text>
        <Text fontSize="5vw" fontWeight="600">
          12 Abril 2024
        </Text>
      </FlexContainer>
    </div>
  );
}

export default Banner;
