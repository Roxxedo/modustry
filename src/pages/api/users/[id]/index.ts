import type { NextApiRequest, NextApiResponse } from 'next'

import { GithubData, UserData } from '@/lib/api/types'
import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const id = req.query.id
    
    const db = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await db.json()

    for (var i in json) {
        const user = json[i].repo.split("/")[0]
        if(user == id) {
            const ghreq = await fetch(`https://api.github.com/users/${id}`)
            const ghjson: GithubData = await ghreq.json()

            if (ghjson.login != "") res.status(200).json({ id: ghjson.id, username: ghjson.login, name: ghjson.name, avatar_url: ghjson.avatar_url, bio: ghjson.bio })
            res.end()
        }
    }
    res.status(404).end()
}
