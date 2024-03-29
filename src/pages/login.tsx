// pages/login.tsx
import { signIn } from "next-auth/react";
import React from "react";
import styles from '../styles/login.module.css';
import { useRouter } from "next/router"; // Import useRouter

const Login: React.FC = () => {
  const router = useRouter(); // Instantiate the router

  // Function to handle guest login
  const continueAsGuest = () => {
    router.push('/search'); // Navigate to the search page
  };

  return (
    <div className={styles.loginContainer}>
      <button onClick={() => signIn('google')} className={`${styles.socialButton} ${styles.googleButton}`}>Login with Google</button>
      <button onClick={() => signIn('facebook')} className={`${styles.socialButton} ${styles.facebookButton}`}>Login with Facebook</button>
      <button onClick={continueAsGuest} className={`${styles.socialButton} ${styles.guestButton}`}>Continue as Guest</button>
    </div>
  );
};

export default Login;
