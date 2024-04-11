import Image from "../../../components/Image";

const MessageSent = () => {
  return (
    <section className="message-sent">
      <Image source={"/images/success-35.png"} alter={"success"} />
      <p>
        Your message has been recieved and will be addressed. A reply will be
        sent to your email
      </p>
    </section>
  );
};
export default MessageSent;
