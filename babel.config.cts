import { ConfigFunction } from '@babel/core'

const config: ConfigFunction = function (api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-typescript', 'babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
    ],
  }
}

export default ConfigFunction
