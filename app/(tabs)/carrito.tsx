import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "./_layout";

export default function CarritoScreen() {
  const { cart, clearCart } = useCart();
  const [metodo, setMetodo] = useState("efectivo");

  const total = cart.reduce((acc: number, item: any) => {
    const p = parseInt(item.precio.replace("L ", "").replace(",", ""));
    return acc + p;
  }, 0);

  const finalizar = () => {
    if (cart.length === 0) return Alert.alert("M&A SPORT", "Carrito vacío");
    Alert.alert(
      "Pedido Listo",
      `Total: L ${total}\nMétodo: ${metodo.toUpperCase()}`,
    );
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARRITO DE COMPRA</Text>
      <ScrollView style={{ flex: 1 }}>
        {cart.map((item: any) => (
          <View key={item.cartId} style={styles.item}>
            <Text style={{ color: "#fff" }}>{item.nombre}</Text>
            <Text style={{ color: "#38bdf8", fontWeight: "bold" }}>
              {item.precio}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalText}>TOTAL: L {total.toLocaleString()}</Text>
        <View style={styles.payRow}>
          <TouchableOpacity
            onPress={() => setMetodo("efectivo")}
            style={[styles.payBtn, metodo === "efectivo" && styles.active]}
          >
            <Text style={styles.payText}>EFECTIVO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMetodo("tarjeta")}
            style={[styles.payBtn, metodo === "tarjeta" && styles.active]}
          >
            <Text style={styles.payText}>TARJETA</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buyBtn} onPress={finalizar}>
          <Text style={styles.buyBtnText}>CONFIRMAR COMPRA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617", padding: 20 },
  title: {
    color: "#38bdf8",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: { borderTopWidth: 1, borderColor: "#1e293b", paddingTop: 20 },
  totalText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
  },
  payRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  payBtn: {
    flex: 0.48,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#38bdf8",
    alignItems: "center",
  },
  active: { backgroundColor: "#38bdf8" },
  payText: { color: "#fff", fontWeight: "bold" },
  buyBtn: {
    backgroundColor: "#38bdf8",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },
  buyBtnText: { color: "#020617", fontWeight: "bold", fontSize: 16 },
});
