import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/fpassword-animation.json";
import "../css/Login.css"; 

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    
    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <motion.div 
      className="login-container forgot-password-container"
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="forgot-password-content">
        <motion.div
          className="animation-container forgot-password-animation"
          initial={{ x: -50 }}
          animate={{ x: [0, 10, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        <motion.div 
          className="login-card forgot-password-card"
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2 
            className="login-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Forgot Password
          </motion.h2>

          {message && <p className="success-message">{message}</p>}
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <motion.button 
              type="submit" 
              className="login-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Reset Link
            </motion.button>
          </form>

          <motion.button 
            className="forgot-password-button"
            onClick={() => navigate("/login")}
            animate={{ y: [0, -5, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Back to Login
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ForgotPassword;
