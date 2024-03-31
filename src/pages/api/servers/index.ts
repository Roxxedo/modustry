import type { NextApiRequest, NextApiResponse } from 'next'

import { Data } from '@/lib/types'
import { request } from '@/lib/utils'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(await request('https://raw.githubusercontent.com/Anuken/Mindustry/master/servers_v7.json'))
    res.end()
}