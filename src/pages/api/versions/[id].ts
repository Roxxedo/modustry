import type { NextApiRequest, NextApiResponse } from 'next'

import { ReleaseData, ReleaseAssetData } from '@/lib/api/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id
    
    const db = await fetch('https://api.github.com/repos/Anuken/Mindustry/releases')
    const json: ReleaseData[] = await db.json()

    for (var i in json) {
        const o = json[i]
        if (json[i].tag_name == `v${id}`) {
            res.send({ tag: o.tag_name, body: o.body, github_url: o.html_url, download_links: [ { type: `Client - ${o.assets[0].name}`, url: o.assets[0].browser_download_url }, { type: `Server - ${o.assets[1].name}`, url: o.assets[1].browser_download_url } ] })
        }
    }
    res.status(404).end()
}
