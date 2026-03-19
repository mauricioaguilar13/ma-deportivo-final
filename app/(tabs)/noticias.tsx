import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const NOTICIAS = [
  {
    id: 1,
    fecha: "18 de Marzo, 2026",
    titulo: "Honduras vence 2-1",
    desc: "La selección logra victoria clave en Tegucigalpa.",
    img: require("../../assets/images/honduras.jpg"),
  },
  {
    id: 2,
    fecha: "18 de Marzo, 2026",
    titulo: "Ferrari Domina F1",
    desc: "Hamilton gana su primer GP de la temporada.",
    img: require("../../assets/images/bandera_f1.jpg"),
  },
];

export default function NoticiasScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#020617" }}>
      <Text style={styles.header}>NOTICIAS DEPORTIVAS</Text>
      {NOTICIAS.map((n) => (
        <View key={n.id} style={styles.card}>
          <Image source={n.img} style={styles.img} />
          <View style={{ padding: 15 }}>
            <Text style={{ color: "#38bdf8", fontSize: 12 }}>{n.fecha}</Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 5,
              }}
            >
              {n.titulo}
            </Text>
            <Text style={{ color: "#94a3b8" }}>{n.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 25,
  },
  card: {
    backgroundColor: "#1e293b",
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  img: { width: "100%", height: 200 },
});
