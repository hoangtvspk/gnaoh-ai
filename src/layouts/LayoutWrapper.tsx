import {ReactNode} from 'react'
import MainLayout from './MainLayout'
import {LayoutProvider, useLayout} from '@/contexts/LayoutContext'

// interface ChatHistory {
// 	id: string
// 	title: string
// 	lastMessage: string
// 	timestamp: string
// }

interface LayoutWrapperProps {
	children: ReactNode
}

const LayoutContent = ({children}: LayoutWrapperProps) => {
	const {isSidebarOpen, chatHistory, selectedChat, createNewChat, selectChat} =
		useLayout()

	return (
		<MainLayout
			isSidebarOpen={isSidebarOpen}
			chatHistory={chatHistory}
			selectedChat={selectedChat}
			onNewChat={createNewChat}
			onSelectChat={selectChat}
		>
			{children}
		</MainLayout>
	)
}

const LayoutWrapper = ({children}: LayoutWrapperProps) => {
	return (
		<LayoutProvider>
			<LayoutContent>{children}</LayoutContent>
		</LayoutProvider>
	)
}

export default LayoutWrapper
