const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/app')],
        prependData: `@import '@/styles/variables.scss';`
    }
}

module.exports = nextConfig
