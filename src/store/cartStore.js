 import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStoreCart = create(persist(
      (set)=> ({
            cart: [], 
            addItem: (product) => set((state)=> ({
                  cart: [...state.cart, product]
            })),

            deleteItem: (id) => set((state) => ({
                  cart: state.cart.filter(item => item.id !== id) 
            })),
            clearCart:()=> set({cart: []})
      }), 
      {
            name: 'cart-items'
      }
))

