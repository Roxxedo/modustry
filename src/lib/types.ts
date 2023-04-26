export type Data = {
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

export type GithubAssets = {
    name: string,
    download_count: string,
    browser_download_url: string
}

export type Github = {
    name: string,
    tag_name: string,
    body: string,
    assets: GithubAssets[]
}

export type GenericInputPropsData = {
    value: Data
}

export type GenericInputPropsGithub = {
    value: Github
}

export type GenericInputPropsString = {
    value: string
}