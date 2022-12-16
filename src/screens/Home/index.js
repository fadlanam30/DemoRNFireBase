import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import fireRDB from '../../data/RDBFirebase';
import HomeDetail from './detail';

const HomeScreen = ({ navigation }) => {

    const [user, setUser] = useState(null)
    const [inboxes, setInboxes] = useState([])
    const [loading, setLoading] = useState(true)

    const onRefresh = () => {
        setLoading(true)
        fireRDB.ref(`inboxes/${auth().currentUser.uid}`)
            .once('value')
            .then(async snapshot => {
                if (snapshot.exists()) {
                    setInboxes([])
                    snapshot.forEach(item => {
                        fireRDB.ref(`users/${item.key}`)
                            .once('value')
                            .then(userSnapshot => {
                                setInboxes(prevState => [
                                    ...prevState,
                                    {
                                        id: item.key,
                                        lastMessage: item.val().lastMessage,
                                        lastMessageAt: item.val().lastMessageAt,
                                        roomId: item.val().roomId,
                                        userName: userSnapshot.val().name,
                                    },
                                ])

                            })
                    })
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        console.log('userId', auth().currentUser.uid)
        fireRDB.ref(`users/${auth().currentUser.uid}`)
            .once('value')
            .then(snapshot => {
                console.log('user', snapshot.val())
                setUser(snapshot.val())
            })
    }, [])

    useEffect(() => {
        onRefresh()
    }, [])

    const onAddButton = () => {
        navigation.navigate('CreateChatScreen')
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
                onRefresh={onRefresh}
            />
        )
    }
}

export default HomeScreen