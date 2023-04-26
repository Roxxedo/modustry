import { GenericInputPropsData } from "@/lib/types";
import { Img } from 'react-image'

export default function ModInfo({ value }: GenericInputPropsData) {
    return (
        <>
            <h2>{value.name}</h2>
            <div className='d-flex text-muted pb-4 mb-2 border-bottom border-white'>
                <Img style={{display: 'inline-block'}} className="rounded-3 me-2" src={[("https://raw.githubusercontent.com/" + value.repo + "/master/icon.png"), ("https://raw.githubusercontent.com/" + value.repo + "/master/assets/icon.png"), "https://raw.githubusercontent.com/Anuken/MindustryJavaModTemplate/master/assets/sprites/frog.png"]} alt="Mod Icon" width="128" height="128" />
                <div style={{display: 'inline-block'}}>
                    <span>Repo: <a className='text-muted text-decoration-none' href={'https://github.com/' + value.repo}>{value.repo}</a></span><br/>
                    <span>Author: <a className='text-muted text-decoration-none' href={'https://github.com/' + value.author}>{value.author}</a></span><br/>
                    <span>Stars: {value.stars}</span><br/>
                    <span>Game Version: <a className='text-muted text-decoration-none' href={'https://github.com/Anuken/Mindustry/releases/tag/v' + value.minGameVersion}>{value.minGameVersion}</a></span><br/>
                </div>
            </div>
        </>
    )
}