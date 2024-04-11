import ImageNotes from "./components/ImageNotes";
import StoryHeading from "./components/StoryHeading";
import MissionVision from "./components/MissionVision";
import ShoesMade from "../../components/ShoesMade";

import "../../assets/styles/our-story-page/our-story-style.css";
import "../../assets/styles/our-story-page/our-story-tab-style.css";
import "../../assets/styles/our-story-page/our-story-laptop-style.css";
import "../../assets/styles/our-story-page/our-story-mobile-style.css";

const OurStoryPage = () => {
  return (
    <main className="our-story-page">
      <StoryHeading />
      <ImageNotes />
      <MissionVision />
      <ShoesMade />
    </main>
  );
};
export default OurStoryPage;
