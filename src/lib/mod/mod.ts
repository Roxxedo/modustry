import { Data, GithubRelease } from '@/lib/types'
import { GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getAllDownloads, getPublishedDate, getUpdatedDate, request, requestText, toHtml } from '../utils';

interface IParams extends ParsedUrlQuery {
    id: string
}

const API_URL = process.env.API_URL

export const getProps = async (ctx: GetStaticPropsContext) => {
    const { id } = ctx.params as IParams

    const data = await request<Data>(`${API_URL}/api/mods/${id}`)
    const githubData = await request<GithubRelease[]>(`https://api.github.com/repos/${data.repo}/releases`)
    const readmeData = await requestText(`https://raw.githubusercontent.com/${data.repo}/master/README.md`)
    
    const readme = await toHtml(readmeData)

    const allDownloadsCount = getAllDownloads(githubData)
    const updatedDate = getUpdatedDate(githubData)
    const publishedDate = getPublishedDate(githubData)
    
    var props = { data, readme, allDownloadsCount, updatedDate, publishedDate }
    return props
}