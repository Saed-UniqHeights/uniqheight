import React from "react";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div style={styles.container} className="relative h-screen">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <motion.div
        style={styles.illustration}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="200"
          height="200"
        >
          <circle cx="32" cy="32" r="30" fill="#f2f2f2" />
          <path d="M20 24h24l-4 16H24z" fill="#007bff" />
          <circle cx="26" cy="44" r="2.5" fill="#333" />
          <circle cx="38" cy="44" r="2.5" fill="#333" />
          <text
            x="32"
            y="18"
            textAnchor="middle"
            fontSize="12"
            fill="#007bff"
            fontWeight="bold"
          >
            $
          </text>
        </svg>
      </motion.div>

      <motion.h1
        style={styles.title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        style={styles.message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Looks like this page is out of stock! Try heading back to the main
        aisle.
      </motion.p>

      <motion.button
        style={styles.button}
        onClick={() => (window.location.href = "/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Go Back Home
      </motion.button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "0 1rem",
  },
  illustration: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    maxWidth: "400px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;
