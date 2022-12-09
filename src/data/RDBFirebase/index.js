import { firebase } from "@react-native-firebase/database";

const fireRDB = firebase
    .app()
    .database('https://mabes-app-396ed-default-rtdb.firebaseio.com/')

export default fireRDB