import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";
import TransportSection from "./TransportSection";
import AccommodationSection from "./AccommodationSection";
import {
  pinterestBeige,
  pinterestGreen,
  pinterestWhite,
} from "./style_components/constants";
import FooterSection from "./FooterSection";

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
      <Banner reference={props.homeRef} venueReference={props.venueRef} />
      <VenueSection
        reference={props.venueRef}
        backgroundColor={pinterestWhite}
      />
      <TransportSection
        reference={props.transportRef}
        backgroundColor={pinterestGreen}
      />
      <AccommodationSection
        reference={props.accommodationRef}
        backgroundColor={pinterestBeige}
      />
      <FormSection
        reference={props.formRef}
        backgroundColor={pinterestGreen}
      />
      <GiftSection
        reference={props.supportRef}
        backgroundColor={pinterestWhite}
      />
      <LogoSection backgroundColor="white" />
      <FooterSection backgroundColor={pinterestWhite} />
    </main>
  );
}

export default Home;
