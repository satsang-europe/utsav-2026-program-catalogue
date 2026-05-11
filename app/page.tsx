import EveningPrayerEnglish from "@/components/EvePrayer";
import EveningPrayerHindi from "@/components/EvePrayerHindi";
import FusionKirtan from "@/components/FusionKirtan";
import GuruVandanaEnglish from "@/components/GuruVandana";
import GuruVandanaHindi from "@/components/GuruVandanaHindi";
import HeyMomoBidhatah from "@/components/HeMomoBidhata";
import JoMerePritamSe from "@/components/JoMerePritamSe";
import JoyRadheKirtanEnglish from "@/components/JoyRadheKirtan";
import JoyRadheKirtanHindi from "@/components/JoyRadheKirtanHindi";
import MaKeCharaBacheKePrane from "@/components/MaKeCharaBacheKePrane";
import MorningEveningPrayerEnglish from "@/components/MornEvePrayer";
import MorningEveningPrayerHindi from "@/components/MornEvePrayerHindi";
import MorningPrayerEnglish from "@/components/MorningPrayer";
import MorningPrayerHindi from "@/components/MorningPrayerHindi";
import NoOneIsThere from "@/components/NoOneIsThere";
import OManwaRe from "@/components/OManwaRe";
import PawanYeGhariAyi from "@/components/PawanYeGhariAyi";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FooterComponent from "@/components/shared/Footer";
import HeaderComponent from "@/components/shared/Header";
import ProgramMenu from "@/components/shared/Menu";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <HeaderComponent />
      <main className="flex-1 wrapper">
        <ProgramMenu />
        <div className="mt-10 mb-10 space-y-5">
          <MorningPrayerEnglish />
          <MorningPrayerHindi />
          <MorningEveningPrayerEnglish />
          <MorningEveningPrayerHindi />
          <EveningPrayerEnglish />
          <EveningPrayerHindi />
          <GuruVandanaEnglish />
          <GuruVandanaHindi />
          <JoyRadheKirtanEnglish />
          <JoyRadheKirtanHindi />
          <PawanYeGhariAyi />
          <HeyMomoBidhatah />
          <JoMerePritamSe />
          <OManwaRe />
          <FusionKirtan />
          <MaKeCharaBacheKePrane />
          <NoOneIsThere />
        </div>
      </main>
      <FooterComponent />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
