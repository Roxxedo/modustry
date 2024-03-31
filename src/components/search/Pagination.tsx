import DefaultPage from "@/lib/default";
import { Data } from "@/lib/types"

export type PaginationInput<T> = {
    manager: DefaultPage<T>
}

export default function Pagination<T>({ manager }: PaginationInput<T>) {
    const isActive = (indexx: number) => { if (manager.index == indexx) return 'active'; else return '' }
    const isHided  = (indexx: number) => { const calc = indexx - manager.index + (manager.index + (manager.index - 2)); if (calc > manager.pages.length) return 'hide'; else return '' }

    const render = (index: number) => {
        const number = (indexx: number) => {
            const calc = indexx - index + (index + (index - 2))
            if (index > 3 && indexx < 3) return calc
            if (index > 3 && indexx > 2) if (calc > manager.pages.length) return 0; else return calc
            return Math.ceil(manager.pages.length / 20) - 1 + indexx
        }
        return manager.pages.map((value, indexx, array) => (
            <>
                {indexx < 5 && <a className={`btn ${isActive(number(indexx))} ${isHided(indexx)}`} onClick={() => manager.setIndex(number(indexx))}>{number(indexx)}</a>}
            </>
        ))
    }

    return (
        <nav className='pagination my-4'>
            <div className='d-flex justify-content-center'>
                <button type='button' className='btn' onClick={() => { manager.setIndex(1) }}><i className="fa-solid fa-angles-left" /></button>
                <button type='button' className='btn' onClick={() => { manager.setIndex((manager.index - 1)) }} disabled={manager.index == 1}><i className="fa-solid fa-angle-left" /></button>
                <div className="mx-1" />

                {render(manager.index)}

                <div className="mx-1" />
                <button type='button' className='btn' onClick={() => { manager.setIndex((manager.index + 1)) }} disabled={manager.index == manager.pages.length}><i className="fa-solid fa-angle-right" /></button>
                <button type='button' className='btn' onClick={() => { manager.setIndex(manager.pages.length) }}><i className="fa-solid fa-angles-right" /></button>
            </div>
        </nav>
    );
}