import type { NextApiRequest, NextApiResponse } from 'next'

import { getUserProjects } from '@/lib/api/users'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    const { id } = req.query
    const projects = await getUserProjects(String(id))
    res.status(200).json(projects)
}
