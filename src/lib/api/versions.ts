import { ReleaseData } from "@/lib/types"

export async function versionList() {
    const db = await fetch(`https://api.github.com/repos/Anuken/Mindustry/releases?per_page=100`)
    const json: ReleaseData[] = await db.json()

    var versions = []
    for (var i in json) {
        versions.push(json[i].tag_name.replace('v', ''))
    }
    return versions
}