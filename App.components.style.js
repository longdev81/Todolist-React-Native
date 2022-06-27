import { StyleSheet } from "react-native";
import color from "./contains/color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  navigation: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 12,
  },
  navigationTitle:{
    fontSize: 23,
    fontWeight: '600',
    color: color.red,
    
  },
  navigationMenu:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navigationText: {
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: '500',
    color: color.primary
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 24,
    color: color.primary,
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
  },
});

export default styles;
