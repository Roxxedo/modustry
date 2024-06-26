import { GenericInputPropsGithub } from "@/lib/types";

export default function GHListElement({ value }: GenericInputPropsGithub) {
    return (
        <>
            <a className="mods-item list-group-item list-group-item-action my-1 lh-sm rounded-4 shadow border-0" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <h2 className="mb-1 font-weight-bold">{value.name} | {value.tag_name}</h2>
                </div>
                <br />
                <div className="col-10 mb-1 small fiximg" dangerouslySetInnerHTML={{ __html: value.body }} />
            </a>
        </>
    )
}