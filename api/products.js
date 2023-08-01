import { URL_PATH } from "@/utils/constants";

const API_URL = process.env.API_URL;

export const getServerSideProducts = async ({ limit }) => {
  const res = await fetch(`${API_URL}${URL_PATH.PRODUCTS}?limit=${limit}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((array) =>
    array.map(({ title, price, description, image }) => ({
      title,
      price: `$${price}`,
      description,
      image,
    }))
  );
};
