/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
        esmExternals: false,
      },
    reactStrictMode: true,
    swcMinify: true,
    images :{
      domains:['lh3.googleusercontent.com',"cdn2.psychologytoday.com"]
    },
    
  }
  
  module.exports = nextConfig
  