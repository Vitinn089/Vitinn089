import dotenv from 'dotenv'

dotenv.config({
	path: process.env.NODE_ENV === 'develop' ? '.env.develop' : process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
})

export default {
	PORT: process.env.PORT,
	URL_API: process.env.URL_API,
	URL_IMAGE: process.env.URL_IMAGE
}