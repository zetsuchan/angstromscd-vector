import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'AngstromSCD Vector Service' })
})

app.post('/embed', async (c) => {
  const body = await c.req.json()
  // Vector embedding logic here
  return c.json({ embeddings: [] })
})

app.post('/search', async (c) => {
  const body = await c.req.json()
  // Vector similarity search logic here
  return c.json({ results: [] })
})

const port = 3003
console.log(`Vector service running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
