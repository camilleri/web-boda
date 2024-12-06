import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";
import TransportSection from "./TransportSection";
import AccommodationSection from "./AccommodationSection";
import {
  colorTostatClaret,
  colorTostatObscur,
} from "./style_components/constants";

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
  venueRef: React.RefObject<HTMLDivElement>;
  transportRef: React.RefObject<HTMLDivElement>;
  accommodationRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
  supportRef: React.RefObject<HTMLDivElement>;
};

function Home(props: Props) {
  return (
    <main>
      <Banner reference={props.homeRef} />
      <VenueSection
        reference={props.venueRef}
        backgroundColor={colorTostatClaret}
      />
      <TransportSection
        reference={props.transportRef}
        backgroundColor={colorTostatObscur}
      />
      <AccommodationSection
        reference={props.accommodationRef}
        backgroundColor={colorTostatClaret}
      />
      <FormSection
        reference={props.formRef}
        backgroundColor={colorTostatObscur}
      />
      <GiftSection
        reference={props.supportRef}
        backgroundColor={colorTostatClaret}
      />
      <FormSection
        reference={props.formRef}
        backgroundColor={colorTostatObscur}
      />
      <LogoSection backgroundColor={colorTostatClaret} />
    </main>
  );
}

export default Home;
