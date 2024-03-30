import { request, serverNameToId } from "../utils";
import { ServerType } from "../types";

export default async function getServer(id: string) {
    const data = await request<ServerType[]>('https://raw.githubusercontent.com/Anuken/Mindustry/master/servers_v7.json')
    for (var item of data) {
        const serverID = serverNameToId(item.name)
        if (serverID == id) return item
    }
}