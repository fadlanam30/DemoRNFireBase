import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/Auth/SignUp";
import HomeScreen from "../screens/Home";
import SignInScreen from "../screens/Auth/SignIn";

const Stack = createNativeStackNavigator()

export default Router = ({ initialRouteName }) => (
    <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
)