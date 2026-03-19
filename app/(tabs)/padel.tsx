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

const productosPadel = [
  {
    id: 1,
    nombre: "Pala de Carbono",
    precio: "L 4,500",
    img: require("../../assets/images/pala.png"),
  },
  {
    id: 2,
    nombre: "Bolso Padel Pro",
    precio: "L 1,800",
    img: require("../../assets/images/bolso_padel.jpg"),
  },
  {
    id: 3,
    nombre: "Pelotas Padel (3pk)",
    precio: "L 320",
    img: require("../../assets/images/pelotas.jpg"),
  },
  {
    id: 4,
    nombre: "Camisa Técnica",
    precio: "L 950",
    img: require("../../assets/images/camisa_padel.jpg"),
  },
];

export default function PadelScreen() {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.list}>
      {productosPadel.map((item) => (
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
