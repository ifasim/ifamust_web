import React, { useState, useEffect } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';

//linking data from store
import { useSelector } from 'react-redux';
import { selectChannel} from '../store/reducers/channel';
import { selectUser} from '../store/reducers/user';
import { auth } from '../firebase'

import { authAxios } from "../utils";
// import { userInfoURL } from "../constants";
import { userIDURL } from "../constants";







// import { selectUser } from "./features/userSlice";
import  db from '../firebase'
import firebase from 'firebase'


function Chat() {

    // getting data from store
    // const user = '';
    const user = useSelector(selectUser);
    const channel = Object(useSelector(selectChannel))
   
    const channelId = channel['channelId']
    const channelName = channel['channelName']

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [error, seterror] = useState({});

    const userData = user || userInfo


    useEffect(() => {
        //get user details from dja
        if (user == null) {
            authAxios
            .get(userIDURL)
            .then(res => {
               setUserInfo(res.data)
            })
            .catch(err => {
                seterror(err)
            });

        }else {
            authAxios
            .post(userIDURL, user)
            .then(res => {
            console.log('setting user info...')
            })
            .catch(err => {
                console.log(err)
            });

        }

    }, []);


    useEffect(() => {
        console.log(`effects:  ${auth.currentUser}`)
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data()))
        );
        }
    }, [channelId]);

    const sendMessage = e => {
        e.preventDefault()

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: userData,
        })

        setInput("")
    };

    return (
        
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className='chat__messages'>

                {messages.map((message) => (
                    console.log(message.user),
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    
                    />
                ))}

            </div>

            <div className='chat__input'>
                {/* <AddCircleIcon fontSize='large' /> */}
                <form>
                    <input 
                    value={ input} 
                    disabled={!channelId}
                    onChange={(e) => setInput(e.target.value)} 
                    // placeholder={`Mesage #${channelName}`} />
                    placeholder={`Aa`} />

                    <button className='chat__inputButton' 
                    type='submit'
                    onClick={sendMessage}
                    > 
                    Send 
                    </button>
                </form>

                <div className='chat__inputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                    {console.log("userInfoPost", userData)}
                </div>


            </div>

        </div>
    )
}

export default Chat
