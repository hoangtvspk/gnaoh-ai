import {useLayout} from '@/contexts/LayoutContext'
import {MessageSquare, Plus, Settings, X} from 'lucide-react'

interface ChatHistory {
	id: string
	title: string
	lastMessage: string
	timestamp: string
}

interface SidebarProps {
	isOpen: boolean
	chatHistory: ChatHistory[]
	selectedChat: string
	onNewChat: () => void
	onSelectChat: (id: string) => void
}

const Sidebar = ({
	isOpen,
	chatHistory,
	selectedChat,
	onNewChat,
	onSelectChat,
}: SidebarProps) => {
	const {toggleSidebar} = useLayout()

	return (
		<div
			className={`fixed left-0 top-0 flex flex-col h-full w-64 transform bg-[#171717] text-white transition-transform duration-300 ease-in-out ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className='flex justify-end p-4'>
				<X onClick={toggleSidebar} />
			</div>
			<div className='flex h-full flex-col'>
				<div className='p-4'>
					<button
						onClick={onNewChat}
						className='flex w-full items-center gap-2 rounded-lg border border-gray-700 bg-[#2a2a2a] p-3 text-sm hover:bg-[#3a3a3a]'
					>
						<Plus size={16} />
						<span>New Chat</span>
					</button>
				</div>

				<div className='flex-1 overflow-y-auto'>
					{chatHistory.map((chat) => (
						<div
							key={chat.id}
							onClick={() => onSelectChat(chat.id)}
							className={`flex cursor-pointer items-center gap-2 p-4 hover:bg-[#2a2a2a] ${
								selectedChat === chat.id ? 'bg-[#2a2a2a]' : ''
							}`}
						>
							<MessageSquare size={16} />
							<div className='flex-1 overflow-hidden'>
								<div className='truncate text-sm font-medium'>{chat.title}</div>
								<div className='truncate text-xs text-gray-400'>
									{chat.lastMessage}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='border-t border-gray-700 p-4'>
				<button className='flex w-full items-center gap-2 rounded-lg p-3 text-sm hover:bg-[#2a2a2a]'>
					<Settings size={16} />
					<span>Settings</span>
				</button>
			</div>
		</div>
	)
}

export default Sidebar
