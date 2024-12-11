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
import PictureSection from "./style_components/Picture";
import MusicSection from "./MusicSection";
import PicsSection from "./PicsSection";

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
  venueRef: React.RefObject<HTMLDivElement>;
  transportRef: React.RefObject<HTMLDivElement>;
  accommodationRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
  supportRef: React.RefObject<HTMLDivElement>;
  musicRef: React.RefObject<HTMLDivElement>;
  picsRef: React.RefObject<HTMLDivElement>;
};

function Home(props: Props) {
  return (
    <main>
      <Banner reference={props.homeRef} venueReference={props.venueRef} />
      <VenueSection
        reference={props.venueRef}
        backgroundColor={pinterestGreen}
      />
      <TransportSection
        reference={props.transportRef}
        backgroundColor={pinterestWhite}
      />
      <AccommodationSection
        reference={props.accommodationRef}
        backgroundColor={pinterestBeige}
      />
      <PictureSection background={"url('https://www.olivaturismo.com/oliva/uploaded/Playas%20y%20dunas/Playa%20de%20Terranova/Terranova-3..jpg?1585210959187')"} />
      <FormSection
        reference={props.formRef}
        backgroundColor={pinterestWhite}
      />
      <MusicSection
        reference={props.musicRef}
        backgroundColor={pinterestGreen}
      />
      <PicsSection
        reference={props.picsRef}
        backgroundColor={pinterestWhite}
      />
      <GiftSection
        reference={props.supportRef}
        backgroundColor={pinterestBeige}
      />
      <LogoSection backgroundColor="white" />
      <FooterSection backgroundColor={pinterestWhite} />
    </main>
  );
}

export default Home;
