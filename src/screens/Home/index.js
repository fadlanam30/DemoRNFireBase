import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import fireRDB from '../../data/RDBFirebase';
import HomeDetail from './detail';

const HomeScreen = ({ navigation }) => {

    const [user, setUser] = useState(null)
    const [inboxes, setInboxes] = useState([])
    const [loading, setLoading] = useState(true)
    
    function onAuthStateChanged(user) {
        retrieveUserData(user.uid)
        getInboxes(user.uid)
    }

    const retrieveUserData = (userId) => {
        console.log('userId', userId)
        fireRDB.ref(`users/${userId}`)
            .once('value')
            .then(snapshot => {
                console.log('user', snapshot.val())
                setUser({
                    uid: userId,
                    name: snapshot.val().name,
                    email: snapshot.val().email,
                })
            })
    }

    const getInboxes = (userId) => {
        const temps = []

        fireRDB.ref(`inboxes/${userId}`)
            .on('value', snapshot => {
                snapshot.forEach( item => {
                    fireRDB.ref(`users/${item.key}`)
                        .once('value')
                        .then(userSnapshot => {
                            temps.push({
                                id: item.key,
                                lastMessage: item.val().lastMessage,
                                lastMessageAt: item.val().lastMessageAt,
                                roomId: item.val().roomId,
                                userName: userSnapshot.val().name,
                            })
                        })
                })
            })
        console.log('temps', temps)
        if (temps) setLoading(false)
        setInboxes(temps)
    }

    useEffect(() => {
        const subs = auth().onAuthStateChanged(onAuthStateChanged)
        return subs
    }, [])

    const onAddButton = () => {
        console.log('Pressed')
    }

    const onSignOut = () => {
        auth().signOut().then(() => navigation.replace('SignInScreen'))
    }

    if (user) {
        console.log('userId', user.uid)
        return (
            <HomeDetail
                user={user}
                inboxes={inboxes}
                isLoading={loading}
                onSignOut={onSignOut}
                onAddButton={onAddButton}
            />
        )
    }
}

export default HomeScreen