import ProductCard from "@/components/ProductCard";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar";
import { getServerSideProducts } from "@/api/products";

export const metadata = {
  title: "Catalog App - Products",
  description: "Platzi technical challenge",
};

export default async function Home() {
  const products = await getServerSideProducts({ limit: 10 });

  return (
    <>
      <h2 className={styles.h2} data-testid="heading">
        All products
      </h2>
      <SearchBar />
      <section className={styles.products_container}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  );
}
