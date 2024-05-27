import { ServerType } from "@/lib/types";
import { Img } from 'react-image'

export type ServerInfoProps = {
    value: ServerType
}

export default function ServerInfo({ value }: ServerInfoProps) {
    return (
        <>
            <div className="mod-info serverinfo">
                <Img src={["/modustry.jpg"]} alt="Mod Icon" width="128" height="128" />
                <h2>{value.name}</h2>
                <div>
                    <div className="mb-2" >
                        {value.address.map((item, index, array) => (
                            <>
                                <span>{item}</span>
                                <br />
                            </>
                        ))}
                    </div>
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
        </>
    )
}