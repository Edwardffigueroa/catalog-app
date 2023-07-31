import ProductCard from "@/components/ProductCard";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "Catalog App - Products",
  description: "Platzi technical challenge",
};

export default function Home() {
  return (
    <>
      <h2 className={styles.h2} data-testid="heading">
        All products
      </h2>
      <SearchBar />
      <section className={styles.products_container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}
