import { GenericInputPropsGithub } from "@/lib/types";

export default function GHListElement({ value }: GenericInputPropsGithub) {
    return (
        <>
            <div className="list-group-item list-group-item-action my-1 lh-sm text-white rounded-4" style={{background: "#3f4549"}} aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <h2 className="mb-1 font-weight-bold">{value.name} | {value.tag_name}</h2>
                </div>
                <br />
                {value.assets.map((value, index, array) => (
                    <>
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <h4 className="mb-1 font-weight-bold">{value.name}</h4>
                        </div>
                        <div className="mb-1 text-muted"> <span>Download count: {value.download_count}</span> </div>
                        <a className="mb-1 btn btn-primary " href={value.browser_download_url}>Download</a>
                    </>
                ))}
            </div>
        </>
    )
}