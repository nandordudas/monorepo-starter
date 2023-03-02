import express from 'express'

import { logger } from '~/logger'

export const app = express()

app.listen(3333, () => {
  logger.log('listening on http://localhost:3333/')
})
