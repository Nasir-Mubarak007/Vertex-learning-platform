import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'djy93dxb',
    dataset: 'production',
  },
  studioHost: 'mubi-vertex',
  deployment: {
    appId: 'gvkbgendcsfjusg7t70vmf7b',
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: '../vertex/{lib,app,components}/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../vertex/sanity.types.ts',
    overloadClientMethods: true,
  },
})