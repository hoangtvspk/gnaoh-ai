interface Message {
	role: 'user' | 'assistant'
	content: string
}

interface ChatMessagesProps {
	messages: Message[]
}

const ChatMessages = ({messages}: ChatMessagesProps) => {
	return (
		<div className='flex-1 h-full overflow-y-auto  p-4'>
			{messages.length === 0 ? (
				<div className='flex h-full items-center justify-center text-gray-400'>
					<div className='text-center'>
						<h2 className='mb-2 text-xl font-semibold'>Welcome to Gnafoh AI</h2>
						<p>Start a new conversation by typing a message below.</p>
					</div>
				</div>
			) : (
				messages.map((message, index) => (
					<div
						key={index}
						className={`mb-4 flex ${
							message.role === 'user' ? 'justify-end' : 'justify-start'
						}`}
					>
						<div
							className={`max-w-[80%] rounded-lg p-4 ${
								message.role === 'user'
									? 'bg-[#8B4513] text-white'
									: 'bg-[#2a2a2a] text-white'
							}`}
						>
							{message.content}
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default ChatMessages
