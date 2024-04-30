import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShortNotes = ({ noteIcon, noteHeading, note }) => {
  return (
    <article className="notes">
      <span>
        <FontAwesomeIcon icon={noteIcon} />
      </span>
      <h3>{noteHeading}</h3>
      <p>{note}</p>
    </article>
  );
};
export default ShortNotes;
