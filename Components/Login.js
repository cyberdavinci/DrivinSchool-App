import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from "react-native";
function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.headerText}>log in</Text>

        <View style={styles.textInputContainer}>
          <Text style={styles.welcomeText}>Welcome back! please Login</Text>
          {/* <Text>User Name</Text> */}
          <TextInput style={styles.textInput} placeholder="Email" />

          {/* <Text>Password</Text> */}
          <TextInput
            // style={{ borderBottomWidth: 0.5, padding: 5 }}
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>

        {/*  */}
        <TouchableOpacity
          // style={{
          //   backgroundColor: "grey",
          //   padding: 10,
          //   width: "70%",
          //   alignSelf: "center",
          //   // justifyContent: "center",
          //   marginTop: 60,

          //   borderRadius: 5,
          //   alignItems: "center",
          // }}
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Services")}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        <View style={styles.altLogin}>
          <View style={styles.altLoginItem}>
            <Image
              source={require("../assets/logos/google.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text>Google</Text>
          </View>
          <View style={styles.altLoginItem}>
            <Image
              source={require("../assets/logos/facebook.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text>Facebook</Text>
          </View>
        </View>

        <View style={styles.signUp}>
          <Text>Don't have an account yet?</Text>
          <Text
            style={{ color: "#FF5A2C", fontWeight: "bold", paddingLeft: 5 }}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    color: "#FF5A2C",
    fontStyle: "italic",
    fontFamily: "Lobster",
    fontWeight: "700",
  },
  textInputContainer: {
    margin: 30,
    marginBottom: 20,

    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  welcomeText: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#6A6B6D",
  },
  textInput: {
    backgroundColor: "#EBECF0",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    fontSize: 16,
  },
  registerBtn: {
    backgroundColor: "#FF5A2C",
    margin: 30,
    marginTop: 5,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    border: 0,
  },
  forgotPassword: { alignItems: "center" },
  forgotPasswordText: {
    fontSize: 16,
    color: "#FF5A2C",
  },
  altLogin: {
    // margin: 30,
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  altLoginItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    borderColor: "gray",
    width: 150,
  },

  signUp: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default Login;
