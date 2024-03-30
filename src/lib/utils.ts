import { Data } from '@/lib/types'
import { remark } from 'remark';
import html from 'remark-html';

export function sliceIntoChunks<T>(arr: T[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export async function processMarkdown(md: string) {
    const processedContent = await remark()
        .use(html)
        .process(md);
    return processedContent.toString()
}