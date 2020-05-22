import fetch from 'node-fetch'
import { getError } from './rpc'
import { NextApiResponse } from 'next'

export default async function getNotionAsset(
  res: NextApiResponse,
  assetUrl: string,
  blockId: string
): Promise<{
  signedUrls: string[]
}> {
  const NOTION_TOKEN =
    'df82cc2e5df3d6ed3d233dfcbed3c7d77e4f56f8300452720517bebdacd32c4a77b45c1393b6d889e6e8b4ac98a486f3c75cd44b1f953ace46c6190e77b0a585ecd4122077b324395307a603fadf'
  const API_ENDPOINT = 'https://www.notion.so/api/v3'
  const requestURL = `${API_ENDPOINT}/getSignedFileUrls`
  const assetRes = await fetch(requestURL, {
    method: 'POST',
    headers: {
      cookie: `token_v2=${NOTION_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      urls: [
        {
          url: assetUrl,
          permissionRecord: {
            table: 'block',
            id: blockId,
          },
        },
      ],
    }),
  })

  if (assetRes.ok) {
    return assetRes.json()
  } else {
    console.log('bad request', assetRes.status)
    res.json({ status: 'error', message: 'failed to load Notion asset' })
    throw new Error(await getError(assetRes))
  }
}
