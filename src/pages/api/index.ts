import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.API_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const response = { 
        user:          `${API_URL}/api/users/[id]`,
        user_projects: `${API_URL}/api/users/[id]/projects`,
        user_query:    `${API_URL}/api/query/user`,
        mods:          `${API_URL}/api/mods`,
        mod:           `${API_URL}/api/mods/[id]`,
        query:         `${API_URL}/api/query`,
        versions:      `${API_URL}/api/versions`,
        version:       `${API_URL}/api/versions/[id]`,
        servers:       `${API_URL}/api/servers`,
        server:        `${API_URL}/api/servers/[id]`
    }
    res.status(200).json(response)
    res.end()
}