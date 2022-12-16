import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import fireRDB from '../../data/RDBFirebase'
import CreateChatDetail from './detail';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

const CreateChatScreen = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [selectedId, setSelectedId] = useState(null)

    console.log('dayjs', dayjs.utc().format())

    const onSubmit = () => {
        fireRDB.ref(`inboxes/${auth().currentUser.uid}/${selectedId}`).set({
            lastMessage: '',
            lastMessageAt: dayjs.utc().format(),
            roomId: new Date().getTime(),
            userId: selectedId,
        })
        .then(() => {
            navigation.replace('RoomChatScreen', {selectedId})
        })
        
    }

    useEffect(() => {
        fireRDB.ref(`users`)
            .once('value')
            .then(snapshot => {
                if (snapshot.exists()) {
                    const raws = snapshot.val()
                    const keys = Object.keys(snapshot.val())
                    const values = keys.reduce(
                        (acc, key) => [
                            ...acc,
                            {
                                ...raws[key],
                                id: key,
                            }
                        ], [],
                    )
                    setUsers(values.filter(item => item.id !== auth().currentUser.uid))
                }
            })
    })
    console.log('users', users)

    return (
        <CreateChatDetail
            users={users}
            selectedId={selectedId}
            onSelectedId={setSelectedId}
            onSubmit={onSubmit}
        />
    )
}

export default CreateChatScreen