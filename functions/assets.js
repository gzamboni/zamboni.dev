const fetch = require('node-fetch')

exports.handler = async function(event, context, callback) {
  // your server-side functionality
  const API_ENDPOINT = 'https://www.notion.so/api/v3/getSignedFileUrls'
  const NOTION_TOKEN = process.env.NOTION_TOKEN
  const requestURL = API_ENDPOINT
  const params = event.queryStringParameters
  const assetRes = await fetch(requestURL, {
    method: 'POST',
    headers: {
      cookie: 'token_v2=' + NOTION_TOKEN,
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
  if (assetRes.ok) {
    const jsonResponse = await assetRes.json()

    callback(null, {
      statusCode: 307,
      headers: {
        Location: jsonResponse.signedUrls.pop(),
      },
      body: '',
    })
  } else {
    console.log('bad request', assetRes.status)
    res.json({
      status: 'error',
      message: 'failed to load Notion asset',
    })
    throw new Error(await getError(assetRes))
  }
  // .then(response => response.json())
  // .then(json => {
  // 	callback(null, {
  // 		statusCode: 200,
  // 		body: json
  // 	})
  // })
  // .catch(error => {
  // 	callback(null, {
  // 		statusCode: 422,
  // 		body: 'Oops! Something went wrong. ' + error
  // 	})
  // })

  //   return fetch(requestURL, {
  //     method: 'POST',
  //     headers: {
  //       cookie: 'token_v2=' + NOTION_TOKEN,
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       urls: [
  //         {
  //           url: params.assetUrl,
  //           permissionRecord: {
  //             table: 'block',
  //             id: params.blockId,
  //           },
  //         },
  //       ],
  //     }),
  //   })
  //     .then(response => ({
  //       statusCode: 200,
  //       body: response.json(),
  //     }))
  //     .catch(error => ({
  //       statusCode: 422,
  //       body: 'Oops! Something went wrong. ' + error,
  //     }))

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
