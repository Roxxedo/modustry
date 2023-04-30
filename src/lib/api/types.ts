export type UserData = {
    id: number,
    username: string,
    name: string,
    avatar_url: string,
    bio: string
}

export type GithubData = {
    id: number,
    login: string,
    name: string,
    avatar_url: string,
    bio: string
}

export type ReleaseData = {
    tag_name: string,
    html_url: string,
    body: string
    assets: ReleaseAssetData[]
}

export type ReleaseAssetData = {
    name: string,
    download_count: number,
    browser_download_url: string
}