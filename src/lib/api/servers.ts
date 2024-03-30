import { request } from "../mod/utils";
import { ServerType } from "../types";

export async function getServer(id: string) {
    const data = await request<ServerType[]>('https://raw.githubusercontent.com/Anuken/Mindustry/master/servers_v7.json')
    for (var item of data) {
        const serverID = item.name.toLowerCase().replaceAll(' ', '').replaceAll('\'', '')
        if (serverID == id) return item
    }
}