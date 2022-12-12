import "../../assets/css/pages/LandingPage.css";

import PreviewSection from "./sections/PreviewSection";
import SponsorsSection from "./sections/SponsorsSection";
import TrialSection from "./sections/TrialSection";
import ServicesSection from "./sections/ServicesSection";

function LandingPage() {
  return (
    <div className="LandingPage">
      <PreviewSection
        main={true}
        title="Filme und TV-Sendungen ansehen"
        text="Genießen Sie exklusive Amazon Originals, Netflix, HBO, Disney+, maxdome, Rakuten TV und beliebte Filme und Fernsehsendungen in einem einzigen Abonnement. Jetzt für 5,99 € pro Monat anmelden. Holen Sie sich eine 3-monatige kostenlose Testversion. Jederzeit abbrechen."
        description="Die Mitgliedschaft verlängert sich für 5,99 €/Monat."
      />
      <SponsorsSection />
      <TrialSection />
      <PreviewSection
        contentEnd={true}
        title="Großartige Unterhaltung"
        text="Sehen Sie sich The Grand Tour, preisgekrönte wie The Man in the High Castle und Mozart in the Jungle sowie beliebte Filme und Fernsehsendungen an, wobei alle Titel zum Download zur Verfügung stehen."
      />
      {/* <ServicesSection /> */}
    </div>
  );
}

export default LandingPage;
