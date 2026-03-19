import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Efecto de luz de fondo para el toque 3D */}
      <View style={styles.bgGlow} />

      <View style={styles.mainCard}>
        <View style={styles.logoWrapper}>
          <Image
            // Esta ruta sube dos niveles para llegar a assets desde (tabs)
            source={require("../../assets/images/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.brandName}>M&A SPORT</Text>
        <View style={styles.line} />
        <Text style={styles.tagline}>EL PODER DEL DEPORTE</Text>

        <View style={styles.locationTag}>
          <Text style={styles.locationText}>HONDURAS 2026</Text>
        </View>
      </View>

      <Text style={styles.scrollText}>Cargando tu tienda...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },
  bgGlow: {
    position: "absolute",
    width: width * 0.9,
    height: width * 0.9,
    backgroundColor: "#38bdf8",
    borderRadius: width,
    opacity: 0.1,
  },
  mainCard: {
    width: width * 0.85,
    paddingVertical: 40,
    borderRadius: 35,
    backgroundColor: "rgba(30, 41, 59, 0.6)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.4)",
    elevation: 20,
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  logoWrapper: {
    backgroundColor: "#0f172a",
    padding: 15,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#38bdf8",
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  brandName: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    letterSpacing: 2,
  },
  line: {
    width: 40,
    height: 4,
    backgroundColor: "#38bdf8",
    marginVertical: 10,
    borderRadius: 2,
  },
  tagline: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 25,
  },
  locationTag: {
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#38bdf8",
  },
  locationText: {
    color: "#38bdf8",
    fontSize: 11,
    fontWeight: "bold",
  },
  scrollText: {
    marginTop: 30,
    color: "#475569",
    fontSize: 12,
  },
});
