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
  removeProductFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
  getProduct: (productId: string) => Product | undefined;
};

type ApiResponse = {
  data: Product[];
  meta: any;
};

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
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

        getProduct: (productId: string) => {
          const products = get().products;
          return products.find((product) => product.id === productId);
        },

        addProductToCart: (productId: string, quantity: number) => {
          set((state) => {
            const productToAdd = state.products.find(
              (product) => product.id === productId
            );
            if (!productToAdd) return state;

            const cartItemIndex = state.cart.findIndex(
              (item) => item.id === productId
            );
            if (cartItemIndex > -1) {
              const updatedCart = state.cart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              );
              return { cart: updatedCart };
            } else {
              const newCartItem: CartItem = {
                id: productToAdd.id,
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

        removeProductFromCart: (productId: string) => {
          set((state) => {
            const updatedCart = state.cart.filter(
              (item) => item.id !== productId
            );
            return { cart: updatedCart };
          });
        },

        clearCart: () => {
          set({ cart: [] });
        },
      }),
      { name: "MyStore" }
    )
  )
);
