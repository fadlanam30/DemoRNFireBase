import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/Auth/SignUp";
import HomeScreen from "../screens/Home";
import SignInScreen from "../screens/Auth/SignIn";
import CreateChatScreen from "../screens/create-chat";
import RoomChatScreen from "../screens/room-chat";

const Stack = createNativeStackNavigator()

export default Router = ({ initialRouteName }) => (
    <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateChatScreen" component={CreateChatScreen} />
        <Stack.Screen name="RoomChatScreen" component={RoomChatScreen} />
    </Stack.Navigator>
)