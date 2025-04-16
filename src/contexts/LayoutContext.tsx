import {createContext, useContext, useState, ReactNode} from 'react'

interface ChatHistory {
	id: string
	title: string
	lastMessage: string
	timestamp: string
}

interface LayoutContextType {
	isSidebarOpen: boolean
	toggleSidebar: () => void
	chatHistory: ChatHistory[]
	selectedChat: string
	createNewChat: () => void
	selectChat: (id: string) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const LayoutProvider = ({children}: {children: ReactNode}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
		{
			id: '1',
			title: 'How to create an AI agent?',
			lastMessage: 'Let me help you with that...',
			timestamp: 'Just now',
		},
	])
	const [selectedChat, setSelectedChat] = useState('1')

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const createNewChat = () => {
		const newChat = {
			id: Date.now().toString(),
			title: 'New Chat',
			lastMessage: 'Start a new conversation',
			timestamp: 'Just now',
		}
		setChatHistory([newChat, ...chatHistory])
		setSelectedChat(newChat.id)
	}

	const selectChat = (id: string) => {
		setSelectedChat(id)
	}

	return (
		<LayoutContext.Provider
			value={{
				isSidebarOpen,
				toggleSidebar,
				chatHistory,
				selectedChat,
				createNewChat,
				selectChat,
			}}
		>
			{children}
		</LayoutContext.Provider>
	)
}

export const useLayout = () => {
	const context = useContext(LayoutContext)
	if (context === undefined) {
		throw new Error('useLayout must be used within a LayoutProvider')
	}
	return context
}
