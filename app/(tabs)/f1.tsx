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

const productos = [
  {
    id: 1,
    nombre: "Chaqueta Ferrari",
    precio: "L 5,200",
    img: require("../../assets/images/chaqueta_f1.jpg"),
  },
  {
    id: 2,
    nombre: "Casco Réplica",
    precio: "L 12,500",
    img: require("../../assets/images/casco_f1.jpg"),
  },
  {
    id: 3,
    nombre: "Gorra F1",
    precio: "L 850",
    img: require("../../assets/images/gorra_f1.jpg"),
  },
];

export default function F1Screen() {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.list}>
      {productos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.img} resizeMode="contain" />
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.price}>{item.precio}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => addToCart(item)}>
            <Text style={styles.btnText}>COMPRAR</Text>
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
    borderColor: "#ef4444",
    borderWidth: 1,
  },
  img: { width: 100, height: 100, marginBottom: 10 },
  name: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  price: {
    color: "#ef4444",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  btnText: { color: "#020617", fontWeight: "bold" },
});
