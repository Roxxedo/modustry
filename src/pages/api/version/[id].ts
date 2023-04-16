import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    repo: string,
    name: string,
    author: string,
    lastUpdated: string,
    stars: number,
    minGameVersion: string,
    hasScripts: boolean,
    hasJava: boolean,
    description: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: Data[] = await mods.json()

    var versionmods: Data[] = []

    for (var i in json) {
        if (json[i].minGameVersion == req.query.id) {
            versionmods.push(json[i])
        }
    }

    res.send(versionmods)
}
