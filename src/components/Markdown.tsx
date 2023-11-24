import { GenericInputPropsString } from "@/lib/types";

export default function Markdown({ value }: GenericInputPropsString) {
    return (
        <>
            <div className="small fiximg" dangerouslySetInnerHTML={{ __html: value }} />
        </>
    )
}