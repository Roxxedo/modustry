import { request } from "../utils";
import { Data, GithubData } from "../types";

export async function getUser(id: string) {
    const data = await request<Data[]>('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    for (var user of data) {
        const username = user.repo.split('/')[0]
        if (username == id) {
            const githubData = await request<GithubData>(`https://api.github.com/users/${id}`)
            if (githubData.login !== "") return { id: githubData.id, username: githubData.login, name: githubData.name, avatar_url: githubData.avatar_url, bio: githubData.bio }
        }
    }
    return undefined
}

export async function getUserProjects(id: string) {
    const data = await request<Data[]>('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    var mods = []
    for (var mod of data) {
        if (mod.author == id) {
            mods.push(mod)
        }
    }
    return mods
}