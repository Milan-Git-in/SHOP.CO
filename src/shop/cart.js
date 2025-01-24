import { create } from "zustand";

export const useCart = create((set) => ({
  CartProducts: [], // Array of Objects
  setCartProducts: (Product) => set({ Product }),
  addToCart: (product_id, image_url, name, price, count) => {
    set((state) => {
      const existingProduct = state.CartProducts.find(
        (product) => product.product_id === product_id
      );

      if (existingProduct) {
        return {
          CartProducts: state.CartProducts.map((product) =>
            product.product_id === product_id
              ? { ...product, count: product.count + count }
              : product
          ),
        };
      } else {
        return {
          CartProducts: [
            ...state.CartProducts,
            { product_id, image_url, name, price, count },
          ],
        };
      }
    });
  },
  addMore: (product_id) => {
    set((state) => {
      const existingProduct = state.CartProducts.find(
        (product) => product.product_id === product_id
      );

      if (existingProduct) {
        return {
          CartProducts: state.CartProducts.map((product) =>
            product.product_id === product_id
              ? { ...product, count: product.count + 1 }
              : product
          ),
        };
      }
    });
  },
  removeFromCart: (product_id, count) => {
    set((state) => {
      return {
        CartProducts: state.CartProducts.map((product) => {
          if (product.product_id === product_id) {
            const newCount = product.count - count;
            if (newCount > 0) {
              return { ...product, count: newCount };
            } else {
              return null;
            }
          }
          return product;
        }).filter((product) => product !== null),
      };
    });
  },
}));
