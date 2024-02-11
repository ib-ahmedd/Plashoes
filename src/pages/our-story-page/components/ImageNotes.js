import Image from "../../../components/Image";
import ShortNotes from "./ShortNotes";
import storyNotesArray from "../../../arrays/storyNotesArray";
const ImageNotes = () => {
  const shortNotesDisplay = storyNotesArray.map((item) => (
    <ShortNotes key={item.id} {...item} />
  ));
  return (
    <section className="image-notes">
      <Image
        source={"./images/our-story/our-story-image.png"}
        alter={"two shoes"}
      />
      <div className="short-notes">{shortNotesDisplay}</div>
    </section>
  );
};
export default ImageNotes;
