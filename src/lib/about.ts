import { GetStaticPropsContext } from "next";
import { remark } from "remark";
import html from 'remark-html'

export const getProps = async (ctx: GetStaticPropsContext) => {
    const resmd = await fetch(`https://raw.githubusercontent.com/Roxxedo/modustry/master/README.md`)
    const md: string = await resmd.text()

    const processedContent = await remark()
        .use(html)
        .process(md);
    const readme = processedContent.toString()

    var props = { readme }
    return readme
}