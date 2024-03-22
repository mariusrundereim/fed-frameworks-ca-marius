import { create } from "zustand";
import { BASE_URL } from "../../api";
import { devtools, persist } from "zustand/middleware";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt?: string;
  };
  rating: number;
  tags: string[];
  reviews: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
};

export type CartItem = {
  id: string;
  price: number;
  quantity: number;
};

type StoreState = {
  products: Product[];
  cart: CartItem[];
  fetchProducts: () => Promise<void>;
  addProductToCart: (productId: string, quantity: number) => void;
  totalPrice: () => number;
};

type ApiResponse = {
  data: Product[];
  meta: any;
};

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        cart: [],

        fetchProducts: async () => {
          try {
            const response = await fetch(BASE_URL);
            const { data }: ApiResponse = await response.json();
            console.log("Console log data:", data);
            set({ products: data });
          } catch (error) {
            console.error("Failed to fetch products:", error);
          }
        },

        addProductToCart: (productId: string, quantity: number) => {
          set((state) => {
            const productToAdd = state.products.find(
              (product) => product.id === productId
            );
            if (!productToAdd) return state; // Make sure to return the current state instead of undefined

            const cartItemIndex = state.cart.findIndex(
              (item) => item.id === productId
            );
            if (cartItemIndex > -1) {
              // Product already in cart, update quantity
              const updatedCart = state.cart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              );
              return { cart: updatedCart };
            } else {
              // Product not in cart, add new item with title
              const newCartItem: CartItem = {
                id: productToAdd.id, // Assuming you want to use the product's name as title
                price: productToAdd.price,
                quantity: quantity,
              };
              return { cart: [...state.cart, newCartItem] };
            }
          });
        },

        totalPrice: (): number => {
          return useStore
            .getState()
            .cart.reduce(
              (total: number, item: CartItem) =>
                total + item.price * item.quantity,
              0
            );
        },
      }),
      { name: "MyStore" }
    )
  )
);
