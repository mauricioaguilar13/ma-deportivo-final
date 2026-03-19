import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "./_layout";

const { width } = Dimensions.get("window");

const productosTenis = [
  {
    id: 1,
    nombre: "Raqueta Profesional",
    precio: "L 5,400",
    img: require("../../assets/images/raqueta.jpg"),
  },
  {
    id: 2,
    nombre: "Pelota Individual",
    precio: "L 150",
    img: require("../../assets/images/pelota.png"),
  },
  {
    id: 3,
    nombre: "Mochila Tenis",
    precio: "L 1,200",
    img: require("../../assets/images/mochila.jpg"),
  },
  {
    id: 4,
    nombre: "Grip Absorbente",
    precio: "L 280",
    img: require("../../assets/images/grip.jpg"),
  },
];

export default function TennisScreen() {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.list}>
      {productosTenis.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.img} resizeMode="contain" />
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.price}>{item.precio}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => addToCart(item)}>
            <Text style={styles.btnText}>AGREGAR</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617" },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  card: {
    backgroundColor: "#1e293b",
    width: width * 0.44,
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  img: { width: 100, height: 100, marginBottom: 10 },
  name: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  price: {
    color: "#38bdf8",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#38bdf8",
    padding: 8,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  btnText: { color: "#020617", fontWeight: "bold" },
});
