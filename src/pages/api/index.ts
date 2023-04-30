import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const response = { 
        user:          `${process.env.API_URL}/api/users/[id]`,
        user_projects: `${process.env.API_URL}/api/users/[id]/projects`,
        user_query:    `${process.env.API_URL}/api/query/user`,
        mods:          `${process.env.API_URL}/api/mods`,
        mod:           `${process.env.API_URL}/api/mods/[id]`,
        query:         `${process.env.API_URL}/api/query`,
        versions:      `${process.env.API_URL}/api/versions`,
        version:       `${process.env.API_URL}/api/versions/[id]`
    }
    res.status(200).json(response)
    res.end()
}