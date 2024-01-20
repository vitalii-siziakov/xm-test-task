const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@images': resolvePath('./src/assets/images'),
      '@components': resolvePath('./src/components'),
      '@contexts': resolvePath('./src/contexts'),
    },
  },
}
