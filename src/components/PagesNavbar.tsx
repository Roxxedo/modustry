import { GenericInputPropsString } from "@/lib/types";
import Link from 'next/link'

export default function PagesNavbar({ value }: GenericInputPropsString) {
    return (
        <>
            <nav className='mt-4'>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <Link href={'?page=' + (parseInt(value) - 1)} className="page-link bg-dark text-white">Back</Link>
                    </li>
                    <li className="page-item disabled "><a className="page-link bg-dark text-muted" href="#">{value}</a></li>
                    <li className="page-item">
                        <Link href={'?page=' + (parseInt(value) + 1)} className="page-link bg-dark text-white">Next</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}