import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";

function Home() {
  return (
    <main>
      <Banner />
      <FormSection />
      <VenueSection />
      <GiftSection />
      <LogoSection />
    </main>
  );
}

export default Home;
