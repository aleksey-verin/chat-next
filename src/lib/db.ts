import { Redis, Requester } from '@upstash/redis'

type RedisConfig = Requester & {
  url: string | undefined
  token: string | undefined
}

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
} as RedisConfig)
