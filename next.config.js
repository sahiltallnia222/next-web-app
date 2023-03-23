const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


/** @type {import('next').NextConfig} */


module.exports = (phase) => {
  // devlopment mode variables
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env:{
        NEXT_PUBLIC_HOST:'http://localhost:3000'
      },
    }
  }
// production mode variables
  return {
    reactStrictMode: true,
  }
}
