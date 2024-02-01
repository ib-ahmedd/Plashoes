import ImgHeadContent from "./components/ImgHeadContent";
import lookbookSections from "../../arrays/lookbookSections";

const Lookbook = () => {
  const sectionsDisplay = lookbookSections.map((item) => (
    <ImgHeadContent key={item.id} {...item} />
  ));
  return (
    <main className="lookbook">
      <h1>LOOKBOOK</h1>
      {sectionsDisplay}
    </main>
  );
};

export default Lookbook;
