import { Data, GenericInputPropsData } from "@/lib/types";
import { Img } from 'react-image'

export type ModInfoType = {
    value: Data,
    allDownloadsCount: number,
    updatedDate: string,
    publishedDate: string
}

export default function ModInfo({ value, allDownloadsCount, updatedDate, publishedDate }: ModInfoType) {
    const convert = () => {
        if (allDownloadsCount.toString().length > 3) {
            return (allDownloadsCount / 1000).toString().split('.')[0] + "k"
        }
        return (allDownloadsCount)
    }

    const getDate = (value: string) => {
        if (value == "0") return "undefined"
        const currentDate = new Date()
        const valueDate = new Date(value)

        const addS = (value: number) => { if (value > 1) return 's'; else return '' }

        const year = currentDate.getFullYear() - valueDate.getFullYear()
        const month = currentDate.getMonth() - valueDate.getMonth()
        const day = currentDate.getDay() - valueDate.getDay()

        if (currentDate.getFullYear() !== valueDate.getFullYear()) return `${year} year${addS(year)} ago`
        if (currentDate.getMonth() !== valueDate.getMonth()) return `${month} month${addS(month)} ago`
        if (currentDate.getDay() !== valueDate.getDay()) return `${day} day${addS(day)} ago`
    }

    return (
        <>
            <div className="modinfo">
                <Img src={[("https://raw.githubusercontent.com/" + value.repo + "/master/icon.png"), ("https://raw.githubusercontent.com/" + value.repo + "/master/assets/icon.png"), "https://raw.githubusercontent.com/Anuken/MindustryJavaModTemplate/master/assets/sprites/frog.png"]} alt="Mod Icon" width="128" height="128" />
                <h2>{value.name}</h2>
                <div>
                    <span>{value.description}</span>
                    <div className="mt-1">
                        <a className="me-2" target="_blank" href={`https://github.com/${value.repo}/issues`}><i className="fa-solid fa-triangle-exclamation" />Issues</a>
                        •
                        <a className="ms-2" target="_blank" href={`https://github.com/${value.repo}`}><i className="fa-solid fa-code" /> Source</a>
                    </div>
                </div>
                <hr />
                <div>
                    <span><i className="fa-solid fa-download " /><a className="bold">{convert()}</a> Downloads </span>
                    <span><i className="fa-solid fa-star " /><a className="bold">{value.stars}</a> Stars </span>
                    <div className="dates">
                        <span><i className="fa-solid fa-calendar " />Created <a className="bold">{getDate(publishedDate)}</a></span>
                        <span><i className="fa-solid fa-rotate " />Updated <a className="bold">{getDate(updatedDate)}</a></span>
                    </div>
                    {/* <div className="buttons">
                        <a className="btn"><i className="fa-solid fa-flag " />Report</a>
                        <a className="btn"><i className="fa-solid fa-star " />Star</a>
                    </div> */}
                </div>
                <hr />
                <div className="authors" >
                    <h5> Authors: </h5>
                    <ul>
                        <li>
                            <a href={`https://github.com/${value.repo.split('/')[0]}`} target="_blank">
                                <img src={`https://avatars.githubusercontent.com/${value.repo.split('/')[0]}`} height={48} width={48} />
                                {value.repo.split('/')[0]}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}