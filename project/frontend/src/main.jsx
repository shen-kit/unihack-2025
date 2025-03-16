import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
	fontFamily: 'Garamond, Arial, sans-serif',
})

createRoot(document.getElementById('root')).render(

	<StrictMode>
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>,
)
