import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";
import TransportSection from "./TransportSection";
import AccommodationSection from "./AccommodationSection";
import {
  colorBannerText,
  colorLightGreen,
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
      <Banner
        reference={props.homeRef}
        venueReference={props.venueRef}
        textColor={colorBannerText}
      />
      <VenueSection reference={props.venueRef} backgroundColor="white" />
      <TransportSection
        reference={props.transportRef}
        backgroundColor={pinterestGreen}
      />
      <AccommodationSection
        reference={props.accommodationRef}
        backgroundColor={pinterestWhite}
      />
      <PictureSection
        background={
          "url('https://multimedia.comunitatvalenciana.com/836BFED6D19A4D4BB12AE8389B122BFA/img/0822774A672E47C3B74527A1B88EF404/1610621677483playa-urbana-oliva3630179073402443691.jpg?responsive')"
        }
      />
      <FormSection reference={props.formRef} backgroundColor={pinterestGreen} />
      <MusicSection
        reference={props.musicRef}
        backgroundColor={pinterestWhite}
      />
      <PicsSection reference={props.picsRef} backgroundColor={pinterestBeige} />
      <GiftSection
        reference={props.supportRef}
        backgroundColor={pinterestWhite}
      />
      <PictureSection background={"url('/vietnam.jpeg')"} />
      <LogoSection backgroundColor="white" />
      <FooterSection
        backgroundColor={pinterestBeige}
        textColor="black"
        separationColor={colorLightGreen}
      />
    </main>
  );
}

export default Home;
