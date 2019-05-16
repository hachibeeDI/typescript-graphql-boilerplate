import { createConnection } from 'typeorm'

export type Context = {
  connection: ReturnType<typeof createConnection>;
}