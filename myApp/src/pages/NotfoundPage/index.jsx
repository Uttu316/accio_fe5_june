import { useNavigate } from "react-router";
import notfound from "../../assets/notfound.svg";
import styles from "./notfoundpage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops! Page Not Found</h1>
      <img src={notfound} alt="Not Found" className={styles.image} />
      <button className={styles.button} onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};
export default NotFoundPage;
