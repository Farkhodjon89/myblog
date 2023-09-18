/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: 'image.dummyjson.com' }],
	},
}

module.exports = nextConfig
