import DefaultPage from "@/lib/default"
import { Data } from "@/lib/types"
import { ChangeEvent, MouseEvent as ReactMouseEvent, useCallback } from "react"
import { query as libQuery } from "@/lib/api/query"

export type SidebarFiltersType<T> = {
    data: Data[],
    manager: DefaultPage<T>
}

export default function SidebarFilters<T>({ data, manager }: SidebarFiltersType<T>) {
    const clearFilters = () => {
        $<HTMLInputElement>('.sidebar-filters input[type=checkbox]').each((index, element) => {
            if(element.checked) element.click()
        })
    }

    const onChangeLoader = (ev: ChangeEvent<HTMLInputElement>) => {
        if (ev.currentTarget.checked) { manager.setResults(libQuery(data, manager.query, ev.currentTarget.value, manager.category, manager.version)); manager.setLoader(ev.currentTarget.value) }
        else { manager.setResults(data); manager.setLoader("") }
    }

    const onChangeCategory = (ev: ChangeEvent<HTMLInputElement>) => {
        if (ev.currentTarget.checked) { manager.setResults(libQuery(data, manager.query, manager.loader, ev.currentTarget.value, manager.version)); manager.setCategory(ev.currentTarget.value) }
        else { manager.setResults(data); manager.setCategory("") }
    }

    return (
        <>
            <div className="sidebar-filters">
                <button onClick={() => clearFilters()} className="btn"><i className="fa-solid fa-circle-xmark" /> Clear filters </button>
                <div>
                    <h4>Categories</h4>
                    <ul>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-compass" />Adventure</span></li>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-bug" />Cursed</span></li>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-house" />Decoration</span></li>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-dollar-sign" />Economy</span></li>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-toolbox" />Equipment</span></li>
                        <li><input type="checkbox" onChange={(event) => onChangeCategory(event)} /><span><i className="fa-solid fa-carrot" />Food</span></li>
                    </ul>
                    <h4>Loaders</h4>
                    <div>
                        <ul>
                            <li><input type="checkbox" onChange={(event) => { onChangeLoader(event) }} value={"script"} /><span><i className="fa-brands fa-js" />Script</span></li>
                            <li><input type="checkbox" onChange={(event) => { onChangeLoader(event) }} value={"java"} /><span><i className="fa-brands fa-java" />Java</span></li>
                        </ul>
                    </div>
                    {/* <h4>Mindustry Versions</h4>
                    <div className="selectVersion">
                        <div>
                            <input type="checkbox" /><span> Show all versions</span>
                        </div>
                        <select defaultValue={"Select one"}>
                            {versionList.map((value, index, array) => (
                                <>
                                    <option value={value}>{value}</option>
                                </>
                            ))}
                        </select>
                    </div> */}
                </div>
            </div>
        </>
    )
}