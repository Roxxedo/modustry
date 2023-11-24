import type { NextApiRequest, NextApiResponse } from 'next'

import { getVersionList } from '@/lib/api/versions'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    res.status(200).json(await getVersionList())
}
