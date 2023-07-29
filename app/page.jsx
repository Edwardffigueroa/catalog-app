import ProductCard from "@/components/ProductCard";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
      {/* <h2 className={styles.h2} data-testid="heading">
        All products
      </h2> */}
      <section className={styles.products_container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
