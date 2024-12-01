import dotenv from 'dotenv'

dotenv.config({
	path: process.env.NODE_ENV === 'develop' ? '.env.develop' : process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
})

export default {
	PORT: parseInt(process.env.PORT) + 1,
	URL_API: process.env.URL_API,
	URL_IMAGE: process.env.URL_IMAGE
}