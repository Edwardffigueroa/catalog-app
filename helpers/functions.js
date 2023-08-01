import { ORDER_DESC } from "@/utils/constants";

export const orderAlphabeticalTitle = (array, order) => {
  if (order === ORDER_DESC) {
    return array.sort((a, b) =>
      b.title.localeCompare(a.title, undefined, { sensitivity: "base" })
    );
  }

  return array.sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
  );
};

export const orderByPrice = (array) => {
  return array.sort((a, b) => a.price - b.price);
};
