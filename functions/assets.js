import querystring from 'querystring'
import fetch from 'node-fetch'

exports.handler = function(event, context, callback) {
  // your server-side functionality
  const API_ENDPOINT = 'https://www.notion.so/api/v3'
  const NOTION_TOKEN = process.env.NOTION_TOKEN
  const requestURL = `${API_ENDPOINT}/getSignedFileUrls`
  const params = querystring.parse(event.body)
  return fetch(requestURL, {
    method: 'POST',
    headers: {
      cookie: `token_v2=${NOTION_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      urls: [
        {
          url: params.assetUrl,
          permissionRecord: {
            table: 'block',
            id: params.blockId,
          },
        },
      ],
    }),
  })
    .then(response => ({
      statusCode: 200,
      body: response.json(),
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))

  // if (assetRes.ok) {
  // 	return assetRes.json()
  // } else {
  // 	console.log('bad request', assetRes.status)
  // 	res.json({
  // 		status: 'error',
  // 		message: 'failed to load Notion asset'
  // 	})
  // 	throw new Error(getError(assetRes))
  // }
}
