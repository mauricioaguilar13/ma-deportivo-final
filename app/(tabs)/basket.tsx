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

const productosBasket = [
  {
    id: 1,
    nombre: "Balón Spalding NBA",
    precio: "L 1,100",
    img: require("../../assets/images/nba.jpg"),
  },
  {
    id: 2,
    nombre: "Camisa Lakers #23",
    precio: "L 1,500",
    img: require("../../assets/images/camisa_padel.jpg"),
  }, // Puedes cambiar la imagen si tienes una de basket
  {
    id: 3,
    nombre: "Zapatillas High",
    precio: "L 3,800",
    img: require("../../assets/images/zapatillas.jpg"),
  },
  {
    id: 4,
    nombre: "Mangas de Compresión",
    precio: "L 450",
    img: require("../../assets/images/mangas.jpg"),
  },
];

export default function BasketScreen() {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.list}>
      {productosBasket.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.img} resizeMode="contain" />
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.price}>L. {item.precio}</Text>
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
