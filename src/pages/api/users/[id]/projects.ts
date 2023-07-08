import type { NextApiRequest, NextApiResponse } from 'next'

import { GithubData, UserData } from '@/lib/types'
import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id
    
    const db = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await db.json()

    var mods = []
    for (var i in json) {
        if(json[i].author == id) {
            mods.push(json[i])
        }
    }

    res.status(200).json(mods)
    res.end()
}
