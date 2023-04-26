import { GenericInputPropsString } from "@/lib/types";

export default function PagesNavbar({ value }: GenericInputPropsString) {
    return (
        <>
            <nav className='mt-4'>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a id="back-button" className="page-link bg-dark text-white" href={'?page=' + (parseInt(value) - 1)}>Back</a>
                    </li>
                    <li className="page-item disabled "><a className="page-link bg-dark text-muted" href="#">{value}</a></li>
                    <li className="page-item">
                        <a className="page-link bg-dark text-white" href={'?page=' + (parseInt(value) + 1)}>Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}