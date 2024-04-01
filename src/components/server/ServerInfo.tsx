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
                    {value.address.map((item, index, array) => (
                        <>
                            <span> {item}</span>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}