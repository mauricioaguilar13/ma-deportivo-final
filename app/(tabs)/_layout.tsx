import { Ionicons } from "@expo/vector-icons"; // Importamos los iconos
import { Tabs } from "expo-router";
import React, { createContext, useContext, useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  img: any;
  cartId?: number;
}

const CartContext = createContext<any>(null);
export const useCart = () => useContext(CartContext);

export default function Layout() {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (product: Producto) => {
    setCart((prevCart) => [...prevCart, { ...product, cartId: Date.now() }]);
    alert("¡Agregado a M&A SPORT!");
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#020617",
            borderTopColor: "#1e293b",
          },
          tabBarActiveTintColor: "#38bdf8",
          tabBarInactiveTintColor: "#94a3b8",
          headerStyle: { backgroundColor: "#020617" },
          headerTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="futbol"
          options={{
            title: "Fútbol",
            tabBarIcon: ({ color }) => (
              <Ionicons name="football" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="f1"
          options={{
            title: "F1",
            tabBarIcon: ({ color }) => (
              <Ionicons name="speedometer" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="basket"
          options={{
            title: "Basket",
            tabBarIcon: ({ color }) => (
              <Ionicons name="basketball" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="padel"
          options={{
            title: "Padel",
            tabBarIcon: ({ color }) => (
              <Ionicons name="fitness" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="noticias"
          options={{
            title: "Noticias",
            tabBarIcon: ({ color }) => (
              <Ionicons name="newspaper" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="carrito"
          options={{
            title: "Carrito",
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </CartContext.Provider>
  );
}
