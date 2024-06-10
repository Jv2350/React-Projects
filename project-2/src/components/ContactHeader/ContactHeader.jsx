import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={` ${styles.contact_section} container`}>
      <h1>Contact Us</h1>
      <p>
        Let's connect: We're here to help, and we'd love to hear from you!
        Whether you have a question, comment, or just want to chat, you can
        reach out to us through the contact form of this page, or by phone,
        email, or social media.
      </p>
    </div>
  );
};

export default ContactHeader;
