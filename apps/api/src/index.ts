import express, { Router, json } from 'express'

import { logger } from '~/logger'

export const app = express()

const router = Router({
  caseSensitive: true,
  strict: true,
})

router
  .get('/', (_request, response) => {
    response
      .status(200)
      .json({
        status: 'success',
        data: {
          message: 'Hello World!',
        },
      })
  })

router
  .use(json())
  .post<'/', {}, {}, { count: number }>('/', (request, response) => {
    response
      .status(200)
      .json({
        status: 'success',
        data: {
          message: request.body,
        },
      })
  })

app
  .use((_request, response, next) => {
    response
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Headers', '*')
    next()
  })
  .use(router)

app.listen(3333, () => {
  logger.log('listening on http://localhost:3333/')
})
