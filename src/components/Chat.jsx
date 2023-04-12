import React from 'react'
import "../styles/chat.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'


const Chat = () => {
  return (
    <>
      <FontAwesomeIcon icon={faMessage} bounce className='chat' />
    </>
  )
}

export default Chat

