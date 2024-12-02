import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";
import TransportSection from "./TransportSection";
import AccommodationSection from "./AccommodationSection";
import {
  colorLightGreen,
  colorSalmon,
  colorSand,
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
      <VenueSection reference={props.venueRef} backgroundColor={colorSand} />
      <TransportSection
        reference={props.transportRef}
        backgroundColor={colorSalmon}
      />
      <AccommodationSection
        reference={props.accommodationRef}
        backgroundColor={colorLightGreen}
      />
      <FormSection reference={props.formRef} backgroundColor={colorSand} />
      <GiftSection reference={props.supportRef} backgroundColor={colorSalmon} />
      <LogoSection backgroundColor={colorLightGreen} />
    </main>
  );
}

export default Home;
