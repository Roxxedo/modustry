import { GenericServerPropsData } from "@/lib/types";
import Link from "next/link";
import { Img } from 'react-image'

export default function ListElement({ value }: GenericServerPropsData) {
    return (
        <>
            <Link href={""} className="list-group-item list-group-item-action d-flex gap-3 my-1 rounded-4 text-white shadow border-0" style={{ background: "#26292f" }} aria-current="true" key={""}>
                <Img src={["/modustry.jpg"]} alt="Server Icon" width="96" height="96" className="rounded-4" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h3 className="mb-1" style={{ display: "inline-block" }}>{value.name}</h3>
                        <div className="mb-1 small">
                            {value.address.map((item, index, array) => (
                                <>
                                    {(index + 1) == array.length && <span> {item}</span>}
                                    {(index + 1) !== array.length && <><span> {item}</span> |</>}
                                </>
                            ))}
                        </div>
                        <p className="mb-1 small" style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, lineClamp: 2, WebkitBoxOrient: "vertical" }}>{value.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}