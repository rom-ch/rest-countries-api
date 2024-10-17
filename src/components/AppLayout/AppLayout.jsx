import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
