import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import classes from "../components/css/SignInPage.module.css";

const SignInPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleEmailSignIn = () => {
    navigate("/signin/email");
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [navigate, user]);

  return (
    <div className="container centre paddingTopHelper">
      {/* GOOGLE CARD */}
      <button onClick={handleGoogleSignIn} className={classes.signInButton}>
        <div className={classes.signInButtonLayout}>
          <div className={classes.signInButtonLogo}>
            <FcGoogle className={classes.logo} />
          </div>
          <div className={classes.signInButtonText}>Sign in with Google</div>
        </div>
      </button>
      {/* EMAIL CARD */}
      <button onClick={handleEmailSignIn} className={classes.signInButton}>
        <div className={classes.signInButtonLayout}>
          <div className={classes.signInButtonLogo}>
            <HiOutlineMail className={classes.logo} />
          </div>
          <div className={classes.signInButtonText}>Sign in with Email</div>
        </div>
      </button>
    </div>
  );
};

export default SignInPage;
