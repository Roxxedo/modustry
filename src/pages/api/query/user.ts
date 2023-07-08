import { UserData } from '@/lib/types'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'
import { queryUser } from '@/lib/api/query'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    const { q } = req.query

    const queryResult = queryUser(q as string, json)

    res.status(200).json((await queryResult).result)
    res.end()
}