import { GenericInputPropsData } from "@/lib/types";
import Link from "next/link";
import { Img } from 'react-image'

export default function ListElement({ value }: GenericInputPropsData) {
    return (
        <>
            <Link href={'/mod/' + value.repo.split('/')[1]} className="mods-item list-group-item list-group-item-action d-flex gap-3 my-1 rounded-4 shadow border-0" aria-current="true" key={"mod-" + value.repo.split('/')[1]}>
              <Img src={[("https://raw.githubusercontent.com/" + value.repo + "/master/icon.png"), ("https://raw.githubusercontent.com/" + value.repo + "/master/assets/icon.png"), "/modustry.jpg"]} alt="Mod Icon" width="96" height="96" className="rounded-4" />
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h3 className="mb-1" style={{display: "inline-block"}}>{value.name}</h3>
                    <small> by {value.repo.split('/')[0]}</small>
                    <div className="mb-1 small"> <span> Stars: {value.stars} | Game Version: {value.minGameVersion} </span></div>
                    <p className="mb-1 small" style={{overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, lineClamp: 2, WebkitBoxOrient: "vertical"}}>{value.description}</p>
                </div>
              </div>
            </Link>
        </>
    )
}