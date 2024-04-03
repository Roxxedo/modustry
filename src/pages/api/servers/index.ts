import type { NextApiRequest, NextApiResponse } from 'next'

import { Data } from '@/lib/types'
import { request } from '@/lib/utils'
import URLS from '@/lib/data'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(await request(URLS.SERVERS_JSON))
    res.end()
}