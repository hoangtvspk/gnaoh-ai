import {useLayout} from '@/contexts/LayoutContext'
import {cn} from '@/utils/cn'
import {MessageCircleMore} from 'lucide-react'

const ChatHeader = () => {
	const {isSidebarOpen, toggleSidebar} = useLayout()

	return (
		<header className={cn(' p-4 text-white')}>
			<div className={cn('flex items-center ')}>
				{isSidebarOpen ? null : (
					<MessageCircleMore onClick={toggleSidebar} className='mr-2' />
				)}
				<h1 className='text-xl font-semibold'>Gnafoh AI</h1>
			</div>
		</header>
	)
}

export default ChatHeader
