import styles from "./Home.module.css";

const Home = () => {
    return (
        <main className={styles.main}>
            <span className={styles.heading}>Home</span>
            <span className={styles.subHeading}>Welcome to your application</span>
        </main>
    );
};

export default Home;
