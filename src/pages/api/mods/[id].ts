import type { NextApiRequest, NextApiResponse } from 'next'

import { getMod } from '@/lib/api/mods'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    const { id } = req.query
    const response = await getMod(String(id))
    if (id && response)res.status(200).json(response)
    res.status(404).end()
}
