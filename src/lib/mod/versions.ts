import { Data, Github } from '@/lib/types'
import { GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { remark } from 'remark'
import html from 'remark-html'

const API_URL = process.env.API_URL

export const getProps = async (ctx: GetServerSidePropsContext) => {
    const { id } = ctx.query
    
    const res = await fetch(`${API_URL}/api/mod/${id}`)
    const data: Data = await res.json()

    const gres = await fetch(`https://api.github.com/repos/${data.repo}/releases`)
    const gjson: Github[] = await gres.json();

    gjson.map(async (value, index, number) => {
        const processedContent = await remark()
        .use(html)
        .process(value.body);
        value.body = processedContent.toString().replaceAll('h2', 'h4')
    })

    var props = { gjson, data }
    return props
}