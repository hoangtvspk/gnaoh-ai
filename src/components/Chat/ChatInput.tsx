import {Upload} from 'lucide-react'
import {useRef} from 'react'
import {useLayout} from '@/contexts/LayoutContext'

interface Message {
	role: 'user' | 'assistant'
	content: string
}

interface ChatInputProps {
	input: string
	onInputChange: (value: string) => void
	onSend: () => void
	onFileUpload?: (file: File) => void
	messages: Message[]
}

const ChatInput = ({
	input,
	onInputChange,
	onSend,
	onFileUpload,
	messages,
}: ChatInputProps) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const {isSidebarOpen, toggleSidebar} = useLayout()

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			if (messages.length && !isSidebarOpen) toggleSidebar()
			onSend()
		}
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file && onFileUpload) {
			onFileUpload(file)
		}
		// Reset the input value so the same file can be selected again
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	return (
		<div className='w-full max-w-[800px] mx-auto mb-4'>
			<div className=' rounded-[20px] bg-[#2a2a2a] p-2 pb-4'>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						value={input}
						onChange={(e) => onInputChange(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder='Type your message...'
						className='flex-1 rounded-lg border-none   p-3 text-white placeholder-gray-400 focus:border-none focus:outline-none focus:ring-0 focus:ring-[#8B4513]'
					/>
					<input
						type='file'
						ref={fileInputRef}
						onChange={handleFileChange}
						className='hidden'
						accept='.txt,.pdf,.doc,.docx,.png,.jpg,.jpeg'
					/>
					<button
						onClick={handleUploadClick}
						className='rounded-lg bg-[#2a2a2a] p-3 text-white hover:bg-[#3a3a3a] transition-colors duration-200'
						title='Upload file'
					>
						<Upload size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatInput
