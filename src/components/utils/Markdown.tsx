import { GenericInputPropsString } from "@/lib/types";

export default function Markdown({ value }: GenericInputPropsString) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: value }} />
        </>
    )
}