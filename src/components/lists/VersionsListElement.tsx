import { GenericInputPropsGithub } from "@/lib/types";

export default function GHListElement({ value }: GenericInputPropsGithub) {
    const getDate = (value: string) => {
        return new Date(value).toLocaleDateString()
    }

    return (
        <>
            {value.assets.map((value2, index, array) => (
                <>
                    <div className="item">
                        <div className="d-flex align-items-center justify-content-around">
                            <li><h4>{value.name}</h4><span>{value.tag_name}</span></li>
                            <li><h4>Branch</h4><span>{value.target_commitish}</span></li>
                            <li><h4>Published at</h4><span>{getDate(value.published_at)}</span></li>
                            <li><h4>Download Count</h4><span>{value2.download_count}</span></li>
                            <li><div className="main-border-button border-no-active"><a href={value2.browser_download_url}>Download</a></div></li>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}