import { getDefaultConfig } from 'expo/metro-config'

// Learn more https://docs.expo.io/guides/customizing-metro

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

export default config
