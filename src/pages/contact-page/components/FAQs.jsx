import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQs = ({ question, answer, id, handleOpenQuestion, isOpen }) => {
  return (
    <div className="FAQs">
      <button
        onClick={() => {
          handleOpenQuestion(id);
        }}
        className="button"
        style={{ transition: ".3s", color: isOpen && "#444" }}
      >
        {question}
        <span
          className="icon"
          style={{
            transition: ".3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <span
        className="answer-span"
        style={{
          padding: isOpen ? "1em 0" : "0",
          height: isOpen ? "3em" : "0",
          borderBottom: isOpen ? "1px solid #e7e7e7" : "none",
        }}
      >
        <p>{answer}</p>
      </span>
    </div>
  );
};
export default FAQs;
