export const initialState = {
  products: (() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            title: "Alma",
            count: 0,
            price: 1,
          },
          {
            id: 2,
            title: "Armud",
            count: 0,
            price: 2,
          },
          {
            id: 3,
            title: "Heyva",
            count: 0,
            price: 2,
          },
          {
            id: 4,
            title: "Nar",
            count: 0,
            price: 3,
          },
        ];
  })(),
};
