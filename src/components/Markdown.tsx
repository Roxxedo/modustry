import { GenericInputPropsString } from "@/lib/types";

export default function Markdown({ value }: GenericInputPropsString) {
    return (
        <>
            <div className="col-10 mb-1 small fiximg" dangerouslySetInnerHTML={{ __html: value }} />
        </>
    )
}