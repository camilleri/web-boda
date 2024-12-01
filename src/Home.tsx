import Banner from "./Banner";
import LogoSection from "./LogoSection";
import FormSection from "./FormSection";
import VenueSection from "./VenueSection";
import GiftSection from "./GiftSection";
import TransportSection from "./TransportSection";

function Home() {
  return (
    <main>
      <Banner />
      <FormSection />
      <VenueSection />
      <TransportSection />
      <GiftSection />
      <LogoSection />
    </main>
  );
}

export default Home;
