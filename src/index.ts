import * as Sentry from '@sentry/node'
import {RewriteFrames} from '@sentry/integrations'

const __rootdir__ = __dirname || process.cwd()

Sentry.init({
  dsn: '*insert dsn*',
  integrations: [
    new RewriteFrames({
      root: __rootdir__,
    }),
  ],
})
try {
  throw new Error('test 1')
} catch (error) {
  console.error(error)
  Sentry.captureException(error)
}
