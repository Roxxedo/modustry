import { request } from "../utils";
import { Data } from "../types";

export async function getMod(id: string) {
    const data = await request<Data[]>('https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json')
    for (var item of data) {
        const modID = item.repo.split('/')[1]
        if (modID == id) return item
    }
}