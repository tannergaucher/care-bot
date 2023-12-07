addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  const body = await request.json()

  let cacheKey = `${body.mood}-${body.model}`; // Use the mood and model as the cache key

  let cachedResponse = await carebot_cache.get(cacheKey)

  if (cachedResponse) {
    return new Response(cachedResponse)
  } else {
    fetch('https://server-yzmezs2csa-ue.a.run.app/create-program', {
      method: 'POST',
      body: JSON.stringify({
        mood: body.mood,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(async data => {
        await carebot_cache.put(cacheKey, data)
        return new Response(serverResponseText, {status: serverResponse.status})
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }
}