import "../../styles/contact.scss";
import { motion } from "framer-motion";
import { fadeUpSkill } from "../../animations/stagger";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setIsSending(true);

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      setSuccess(true);
      form.current.reset();
    } catch (error) {
      console.error("Greška pri slanju:", error);
    } finally {
      setIsSending(false);
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = fadeUpSkill;
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Contact Me</motion.h2>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            variants={itemVariants}
          />

          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            variants={itemVariants}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            variants={itemVariants}
          />

          <motion.button
            type="submit"
            className="contact-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="success-message">Message sent successfully ✅</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};
export default ContactSection;
