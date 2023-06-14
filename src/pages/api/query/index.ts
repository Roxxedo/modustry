import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'
import { query } from '@/lib/api/query'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MindustryData[]>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    const { q } = req.query

    const result = query(String(q), json)

    res.status(200).json(result)
    res.end()
}