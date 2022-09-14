import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true
	},
	server: {
		host: '0.0.0.0'
	}
})
