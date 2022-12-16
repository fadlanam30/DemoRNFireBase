import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoomChatDetail from './detail'
import auth from '@react-native-firebase/auth';
import fireRDB from '../../data/RDBFirebase'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

const RoomChatScreen = ({ route, navigation }) => {
  const { selectedId, userName, roomId } = route.params
  // console.log("params", selectedId, userName, roomId);
  const [message, setMessage] = useState(null)
  const [listMessages, setListMessages] = useState([])
  const [message1, setMessage1] = useState(null)
  
  const onSubmitChat = () => {
    const newReference = fireRDB.ref(`messages/${roomId}`).push();
    console.log('Auto generated key: ', newReference.key);
    newReference
      .set({
        createdAt: dayjs.utc().format(),
        message: message,
        messageType: "text",
        userId: auth().currentUser.uid
      })
      .then(() => {
        setMessage("")
        console.log('Data updated.')
      })
    // console.log("chat", chat);
  }

  // useEffect(() => {
  //   fireRDB.ref(`messages/${roomId}`)
  //     .once('value')
  //     .then(async snapshot => {
  //       if (snapshot.exists()) {
  //         snapshot.forEach(item => {
  //           // console.log('ChatMasuk:', snapshot.val());
  //           setMessage1(item.val().message)
  //           setListMessages(prevState => [
  //             ...prevState,
  //             {
  //               id: item.key,
  //               createdAt: item.val().createdAt,
  //               message: item.val().message,
  //               messageType: item.val().messageType,
  //               userId: item.val().user
  //             },
  //           ])
  //         })

  //       }
  //     }
  //     )
  // })

  useEffect(() => {
    fireRDB.ref(`messages/${roomId}`)
      .on('value', snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(item => {
            console.log('ChatMasuk:', snapshot.val());
            setMessage1(item.val().message)
            setListMessages(prevState => [
              ...prevState,
              {
                id: item.key,
                createdAt: item.val().createdAt,
                message: item.val().message,
                messageType: item.val().messageType,
                userId: item.val().user
              },
            ])
          })
          
        }
      }
      )
  })
  
  return (
    <RoomChatDetail
      userName={userName}
      message={message}
      setMessage={setMessage}
      onSubmitChat={onSubmitChat}
    />
  )
}

export default RoomChatScreen