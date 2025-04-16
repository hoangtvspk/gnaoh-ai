import {ReactNode} from 'react'
import Sidebar from '@/components/Chat/Sidebar'

interface ChatHistory {
	id: string
	title: string
	lastMessage: string
	timestamp: string
}

interface MainLayoutProps {
	children: ReactNode
	isSidebarOpen: boolean
	chatHistory: ChatHistory[]
	selectedChat: string
	onNewChat: () => void
	onSelectChat: (id: string) => void
}

const MainLayout = ({
	children,
	isSidebarOpen,
	chatHistory,
	selectedChat,
	onNewChat,
	onSelectChat,
}: MainLayoutProps) => {
	return (
		<div className='flex h-screen bg-gray-100'>
			<Sidebar
				isOpen={isSidebarOpen}
				chatHistory={chatHistory}
				selectedChat={selectedChat}
				onNewChat={onNewChat}
				onSelectChat={onSelectChat}
			/>

			<div
				className={`flex flex-1 flex-col transition-all  ease-in-out ${
					isSidebarOpen ? 'ml-64 duration-400' : 'ml-0 duration-200'
				}`}
			>
				<div className='flex h-full flex-col'>{children}</div>
			</div>
		</div>
	)
}

export default MainLayout
