import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SocialButtons from "./SocialButtons/SocialButtons";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [glitchEffect, setGlitchEffect] = useState(0);
  const [shake, setShake] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Form validation
    const formData = new FormData(form.current);
    const isValid = Array.from(formData.entries()).every(
      ([name, value]) => name === 'message' || Boolean(value)
    );

    if (!isValid) {
      setShake(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    const glitchInterval = setInterval(() => {
      setGlitchEffect(Math.random() * 10);
    }, 50);

    emailjs
      .sendForm(
        "service_far5wrq",
        "template_qf4qd97",
        form.current,
        "for9eIINThsoZDtYs"
      )
      .then(
        (result) => {
          setSubmitMessage("✓ TRANSMISSION SUCCESS");
          form.current.reset();
        },
        (error) => {
          setSubmitMessage("✗ TRANSMISSION FAILED");
        }
      )
      .finally(() => {
        clearInterval(glitchInterval);
        setGlitchEffect(0);
        setIsSubmitting(false);
      });
  };

  // Reset message after 3 seconds
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  // Reset shake animation
  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  return (
    <section className="contact" id="contact">
      <Helmet>
        <title>Contact | Dinesh Khatua</title>
      </Helmet>

      <motion.h2
        className="heading"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <motion.div
              className="input-box"
              animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                name="from_name"
                placeholder="FULL_NAME"
                className="cyber-input"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="EMAIL_ADDRESS"
                className="cyber-input"
                required
              />
            </motion.div>

            <motion.div
              animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="ENTER_MESSAGE"
                className="cyber-textarea"
                required
              ></textarea>
            </motion.div>

            <motion.div className="submit-container">
              <button 
                type="submit" 
                className="gradient-hover cyber-font"
                disabled={isSubmitting || submitMessage}
              >
                {submitMessage || (
                  isSubmitting ? "TRANSMITTING..." : "INITIATE_TRANSMISSION"
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          className="social-buttons-container hologram"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <SocialButtons />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;