import { GenericInputPropsData } from "@/lib/types";
import { Img } from 'react-image'

export default function ListElement({ value }: GenericInputPropsData) {
    return (
        <>
            <a href={'/mod/' + value.name} className="list-group-item list-group-item-action d-flex gap-3 my-1 rounded-4 text-white" style={{background: "#3f4549"}} aria-current="true">
              <Img src={[("https://raw.githubusercontent.com/" + value.repo + "/master/icon.png"), ("https://raw.githubusercontent.com/" + value.repo + "/master/assets/icon.png"), "https://raw.githubusercontent.com/Anuken/MindustryJavaModTemplate/master/assets/sprites/frog.png"]} alt="Mod Icon" width="96" height="96" className="rounded-3 flex-shrink-0" />
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h3 className="mb-1" style={{display: "inline-block"}}>{value.name}</h3>
                    <small> by {value.author}</small>
                    <div className="mb-1 small"> <span> Stars: {value.stars} | Game Version: {value.minGameVersion} </span></div>
                    <p className="mb-1 small" style={{overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, lineClamp: 2, WebkitBoxOrient: "vertical"}}>{value.description}</p>
                </div>
              </div>
            </a>
        </>
    )
}