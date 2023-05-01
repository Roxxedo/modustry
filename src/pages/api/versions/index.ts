import type { NextApiRequest, NextApiResponse } from 'next'

import { ReleaseData, ReleaseAssetData } from '@/lib/api/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id
    
    const db = await fetch(`https://api.github.com/repos/Anuken/Mindustry/releases?per_page=100`)
    const json: ReleaseData[] = await db.json()

    var versions = []
    for (var i in json) {
        versions.push(json[i].tag_name.replace('v', ''))
    }
    res.status(200).json(versions)
    res.end()
}
