import type { NextApiRequest, NextApiResponse } from 'next'

import { getUser } from '@/lib/api/users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    const { id } = req.query
    const user = await getUser(String(id))
    if (user)
    res.status(200).json(user)
    res.status(404).end()
}
