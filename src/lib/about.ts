import { GetStaticPropsContext } from "next";
import { processMarkdown } from "./utils";

export const getProps = async (ctx: GetStaticPropsContext) => {
    const res = await fetch(`https://raw.githubusercontent.com/Roxxedo/modustry/master/README.md`)
    const text: string = await res.text()

    return processMarkdown(text)
}