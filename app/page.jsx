import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1} data-testid="heading">
        Hello world
      </h1>
    </main>
  );
}
