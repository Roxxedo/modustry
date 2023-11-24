import type { NextApiRequest, NextApiResponse } from 'next'

import { Data } from '@/lib/types'
import { query } from '@/lib/api/query'
import { request } from '@/lib/mod/utils'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    const { q, loader, category, version } = req.query
    const data = await request<Data[]>('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    res.status(200).json(query(data, String(q), String(loader), String(category), String(version)))
}