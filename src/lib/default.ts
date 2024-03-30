import { GetServerSidePropsContext } from "next";
import { request } from "./mod/utils";
import { useState } from "react";
import { sliceIntoChunks } from "./utils";

const API_URL = process.env.API_URL

export async function getProps(ctx: GetServerSidePropsContext) {
    const data = await request(`${API_URL}/api/mods`)

    return { data }
}

export default class DefaultPage<T> {
    private default: T[]

    private data: T[];
    private setData: Function;

    public index: number;
    public perPage: number;
    public pages: T[][];
    public results: T[];

    public setIndex: Function;
    public setPerPage: Function;
    public setPages: Function;
    public setResults: Function;

    public query: string;
    public loader: string;
    public category: string;
    public version: string;

    public setQuery: Function;
    public setLoader: Function;
    public setCategory: Function;
    public setVersion: Function;

    constructor(value: T[]) {
        const [data, setData] = useState<T[]>(value)

        this.default = data
        this.data = data
        this.setData = setData

        const [index, setIndex] = useState(1)
        const [perPage, setPerPage] = useState(20)
        const [pages, setPages] = useState<T[][]>(sliceIntoChunks(this.data, perPage))
        const [results, setResults] = useState<T[]>(pages[(index - 1)])

        const [query, setQuery] = useState<string>("")
        const [loader, setLoader] = useState<string>("")
        const [category, setCategory] = useState<string>("")
        const [version, setVersion] = useState<string>("")

        this.index = index
        this.perPage = perPage
        this.pages = pages
        this.results = results

        this.setIndex = setIndex
        this.setPerPage = setPerPage
        this.setPages = setPages
        this.setResults = setResults

        this.query = query
        this.loader = loader
        this.category = category
        this.version = version

        this.setQuery = setQuery
        this.setLoader = setLoader
        this.setCategory = setCategory
        this.setVersion = setVersion
    }

    update() {
        this.setPages(sliceIntoChunks(this.data, this.perPage))
        this.setResults(this.pages[(this.index - 1)])
    }
}