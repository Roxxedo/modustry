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

type DataResponse = {
    author: string,
    mods: Data[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
    const mods = await fetch('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    const json: Data[] = await mods.json()

    var authormods: Data[] = []
    for (var i in json) {
        if (json[i].author == req.query.id) {
            authormods.push(json[i])
        }
    }

    for (var i in json) {
        if (json[i].author == req.query.id) {
            res.send({author: req.query.id, mods: authormods})
        }
    }
    res.end()
}
