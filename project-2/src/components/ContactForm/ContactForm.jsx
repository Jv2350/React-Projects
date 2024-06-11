import { MdMessage } from "react-icons/md";
import Buttons from "../Buttons/Buttons";
import styles from "./ContactForm.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Buttons
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          isOutline={true}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="11" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Buttons text="SUBMIT" icon={<HiMail fontSize="24px" />} />
          </div>
        </form>
      </div>

      <div className={styles.container_img}>
        <img src="/public/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
