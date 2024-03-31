import type { NextApiRequest, NextApiResponse } from 'next'
import getServer from '@/lib/api/servers'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    const { id } = req.query
    const response = await getServer(String(id))
    if (id && response) res.status(200).json(response)
    res.status(404).end()
}
