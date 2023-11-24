import { requestText } from "./mod/utils"

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

export type GithubRelease = {
    name: string,
    tag_name: string,
    body: string,
    assets: GithubReleaseAssets[],
    target_commitish: string,
    published_at: string
}

export type GithubReleaseAssets = {
    name: string,
    download_count: string,
    browser_download_url: string
}

export type GithubData = {
    id: number,
    login: string,
    name: string,
    avatar_url: string,
    bio: string
}

export type UserData = {
    id: number,
    username: string,
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

export type SearchType = {
    query: string,
    loader: string,
    category: string,
    version: string
}

/* Props Data */

export type GenericHeadPropsData = {
    title: string,
    description: string
}

export type GenericInputPropsData = {
    value: Data
}

export type GenericInputPropsGithub = {
    value: GithubRelease
}

export type GenericInputPropsString = {
    value: string
}