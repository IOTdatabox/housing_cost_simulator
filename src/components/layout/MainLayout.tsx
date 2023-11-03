import styles from "./MainLayout.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>
    <ToastContainer/>
    {children}
  </div>;
}
