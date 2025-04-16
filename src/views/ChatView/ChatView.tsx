import {useState} from 'react'
import ChatHeader from '@/components/Chat/ChatHeader'
import ChatMessages from '@/components/Chat/ChatMessages'
import ChatInput from '@/components/Chat/ChatInput'

interface Message {
	role: 'user' | 'assistant'
	content: string
	file?: {
		name: string
		type: string
		size: number
	}
}

const ChatView = () => {
	const [messages, setMessages] = useState<Message[]>([])
	const [input, setInput] = useState('')

	const handleSend = () => {
		if (input.trim()) {
			setMessages([...messages, {role: 'user', content: input}])
			setInput('')
			// Here you would typically send the message to your backend
		}
	}

	const handleFileUpload = (file: File) => {
		// Create a message with the file information
		const fileMessage: Message = {
			role: 'user',
			content: `Uploaded file: ${file.name}`,
			file: {
				name: file.name,
				type: file.type,
				size: file.size,
			},
		}
		setMessages([...messages, fileMessage])

		// Here you would typically upload the file to your backend
		// and handle the response
	}

	return (
		<div className='flex h-screen flex-col bg-[#1a1a1a]'>
			<ChatHeader />
			<ChatMessages messages={messages} />
			<ChatInput
				input={input}
				onInputChange={setInput}
				onSend={handleSend}
				onFileUpload={handleFileUpload}
				messages={messages}
			/>
		</div>
	)
}

export default ChatView
