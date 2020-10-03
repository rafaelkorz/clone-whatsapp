import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';

export default function Conversations() {
  const { conversations, selectConversationsIndex } = useConversations()

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) =>(
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationsIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
