import { GenericServerPropsData } from "@/lib/types";
import { serverNameToId } from "@/lib/utils";
import Link from "next/link";
import { Img } from 'react-image'

export default function ListElement({ value }: GenericServerPropsData) {
    return (
        <>
            <Link href={"/server/" + serverNameToId(value.name)} className="list-group-item list-group-item-action d-flex gap-3 my-1 rounded-4 text-white shadow border-0" style={{ background: "#26292f" }} aria-current="true" key={""}>
                <Img src={["/modustry.jpg"]} alt="Server Icon" width="96" height="96" className="rounded-4" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h3 className="mb-1" style={{ display: "inline-block" }}>{value.name}</h3>
                        <div className="mb-1 small">
                            
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}