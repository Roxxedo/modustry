import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id

    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    for (var i in json) {
        const modid = json[i].repo.split('/')[1]
        if (modid == id) {
            res.status(200).json(json[i])
            res.end()
        }
    }
    res.status(404).end()
}
