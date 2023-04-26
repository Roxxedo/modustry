import { Data } from '@/lib/types'
import { GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { remark } from 'remark'
import html from 'remark-html';

interface IParams extends ParsedUrlQuery {
    id: string
}

const API_URL = process.env.API_URL

export const getProps = async (ctx: GetStaticPropsContext) => {
    const { id } = ctx.params as IParams

    const res = await fetch(`${API_URL}/api/mod/${id}`)
    const data: Data = await res.json()

    const resmd = await fetch(`https://raw.githubusercontent.com/${data.repo}/master/README.md`)
    const md: string = await resmd.text()

    const processedContent = await remark()
    .use(html)
    .process(md);
    const readme = processedContent.toString()    

    var props = { data, readme }
    return props
}