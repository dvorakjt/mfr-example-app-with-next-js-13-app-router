const { configMFR } = require('modeled-forms-react');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    ...configMFR({
      globalMessages : {
        confirmationFailed: 'Please ensure all required fields are completed and valid.'
      }
    })
  },
}

module.exports = nextConfig
