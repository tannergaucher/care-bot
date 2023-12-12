import { KVNamespace } from '@cloudflare/workers-types'

export interface Env {
  CAREBOT_CACHE: KVNamespace
  SERVER_BASE_URL: string
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      })
    }

    try {
      const body = await request.json()

      const cacheResponse = await env.CAREBOT_CACHE.get(body.mood)

      if (cacheResponse === null) {
        const serverResponse = await fetch(
          env.SERVER_BASE_URL + '/create-program',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          },
        )

        const serverResponseClone = serverResponse.clone()

        await env.CAREBOT_CACHE.put(body.mood, await serverResponse.text(), {
          expirationTtl: 60 * 60 * 24,
        })

        return new Response(await serverResponseClone.text(), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        })
      }

      return new Response(cacheResponse, {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      })
    } catch (error) {
      console.error(error)

      return new Response(error.toString(), { status: 500 })
    }
  },
}
