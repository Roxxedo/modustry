import { UserData } from '@/lib/api/types'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Data as MindustryData } from '@/lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: MindustryData[] = await mods.json()

    const { q } = req.query

    var result: UserData[] = []
    var resultmap: string[] = []
    if (q == undefined) res.send({ message: "No args supplied"})
    else {
        for (var i in json) {
            if (json[i].author.search(q as string) > -1) {
                const user = json[i].repo.split('/')[0]
                if (!resultmap.includes(user)) {
                    const url = await fetch(`${process.env.API_URL}/api/users/${user}`)
                    const json2 = await url.json() 
                    if (!result.includes(json2)) if(json2.error != 404) result.push(json2); resultmap.push(json2.username)
                }
            }
        }
    }

    res.status(200).json(result)
    res.end()
}