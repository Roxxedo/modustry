import type { NextApiRequest, NextApiResponse } from 'next'

import { getVersion } from '@/lib/api/versions'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    const { id } = req.query
    const version = await getVersion(String(id))
    if (version)
    res.status(200).json(version)
    res.status(404).end()
}
