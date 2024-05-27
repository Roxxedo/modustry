import { GenericServerPropsData } from "@/lib/types";
import Link from "next/link";
import { Img } from 'react-image'

export default function ListElement({ value }: GenericServerPropsData) {
    return (
        <>
            <Link href={"/server/" + value.id} className="mods-item list-group-item list-group-item-action d-flex gap-3 my-1 rounded-4 shadow border-0" aria-current="true" key={""}>
                <Img src={["/modustry.jpg"]} alt="Server Icon" width="96" height="96" className="rounded-4" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h3 className="mb-1" style={{ display: "inline-block" }}>{value.name}</h3>
                        <div className="mb-1 small">
                            <div>
                                {value.prioritized == true && <span className="badge text-bg-primary rounded-pill me-1">Prioritized</span>}

                                {value.modded == false && <span className="badge text-bg-success rounded-pill me-1">Vanilla</span>}
                                {value.modded !== false && <span className="badge text-bg-danger rounded-pill me-1">Modded</span>}

                                {value.version == "v7" && <span className="badge text-bg-secondary rounded-pill me-1">V7</span>}
                                {value.version == "v6" && <span className="badge text-bg-secondary rounded-pill me-1">V6</span>}
                                {value.version == "be" && <span className="badge text-bg-secondary rounded-pill me-1">BE</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}