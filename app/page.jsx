import { getServerSideProducts } from "@/api/products";
import HomeContainer from "@/containers/HomeContainer/HomeContainer";

export const metadata = {
  title: "Catalog App - Products",
  description: "Platzi technical challenge",
  openGraph: {
    title: "Catalog App - Products",
    description: "latzi technical challenge",
  },
};

export default async function Home() {
  const products = await getServerSideProducts({ limit: 10 });

  return <HomeContainer products={products} />;
}
