import { GenericInputPropsData } from "@/lib/types";
import { Img } from 'react-image'
import Link from 'next/link'

export default function ModInfo({ value }: GenericInputPropsData) {
    return (
        <>
            <h2>{value.name}</h2>
            <div className='d-flex text-muted pb-4 mb-2 border-bottom border-white'>
                <Img style={{display: 'inline-block'}} className="rounded-3 me-2" src={[("https://raw.githubusercontent.com/" + value.repo + "/master/icon.png"), ("https://raw.githubusercontent.com/" + value.repo + "/master/assets/icon.png"), "https://raw.githubusercontent.com/Anuken/MindustryJavaModTemplate/master/assets/sprites/frog.png"]} alt="Mod Icon" width="128" height="128" />
                <div style={{display: 'inline-block'}}>
                    <span>Repo: <Link href={'https://github.com/' + value.repo} className='text-muted text-decoration-none'>{value.repo}</Link></span><br/>
                    <span>Author: <Link href={'https://github.com/' + value.repo.split('/')[0]} className='text-muted text-decoration-none'>{value.author}</Link></span><br/>
                    <span>Stars: {value.stars}</span><br/>
                    <span>Game Version: <Link href={'https://github.com/Anuken/Mindustry/releases/tag/v' + value.minGameVersion} className='text-muted text-decoration-none'>{value.minGameVersion}</Link></span><br/>
                </div>
            </div>
        </>
    )
}