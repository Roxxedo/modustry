import type { NextApiRequest, NextApiResponse } from 'next'

import { ReleaseData, ReleaseAssetData } from '@/lib/types'
import { versionList } from '@/lib/api/versions'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id
    
    const versions = await versionList()
    
    res.status(200).json(versions)
    res.end()
}
