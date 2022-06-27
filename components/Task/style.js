import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginBottom: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  even: {
    backgroundColor: color.green
  },
  odd: {
    backgroundColor: color.second
  },
  number: {
    fontSize: 16,
    fontWeight: "700",
    color: color.white,
  },
  content: {
    width: "70%",
    fontSize: 16,
  },
  icon: {
    fontSize: 14,
    color: color.red,
  },
});

export default styles;
