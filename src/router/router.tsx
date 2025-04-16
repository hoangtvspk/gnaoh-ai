import {createBrowserRouter, Outlet} from 'react-router-dom'
import {APP_URL} from '@/configs/app-url.config'
import {HomePageLazy, ChatPageLazy} from './lazy-components'
import LayoutWrapper from '@/layouts/LayoutWrapper'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<LayoutWrapper>
				<Outlet />
			</LayoutWrapper>
		),
		children: [
			{
				path: APP_URL.HOME,
				element: <HomePageLazy />,
			},
			{
				path: '/chat',
				element: <ChatPageLazy />,
			},
		],
	},
])

export default router
