import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MindustryData[]>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    res.status(200).json(json)
    res.end()
}