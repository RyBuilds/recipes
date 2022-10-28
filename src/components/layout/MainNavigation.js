import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import classes from "../css/MainNavigation.module.css";

function MainNavigation() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">FirebaseAuth</Link>
      </div>
      <nav>
        <ul>
          <li>
            {user?.displayName || user?.email ? (
              <button onClick={handleSignOut}>Sign out</button>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
