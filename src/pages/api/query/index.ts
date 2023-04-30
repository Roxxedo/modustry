import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MindustryData[]>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    const { q } = req.query

    var result: MindustryData[] = []
    for (var i in json) {
        if (json[i].name.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].author.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }

        if (json[i].repo.search(q as string) > -1) {
            if (!result.includes(json[i])) {
                result.push(json[i])
            }
        }
    }

    res.status(200).json(result)
    res.end()
}