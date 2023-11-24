import { Data, GenericInputPropsData } from "@/lib/types"

export default function SidebarModpacks({ value }: GenericInputPropsData) {
    return (
        <>
            <div className="sidebar-modpacks mb-3" style={{width: "calc(100% - 12px)"}}>
                <button className="btn w-100"><i className="fa-solid fa-plus" /> Create Modpack </button>
                <button className="btn w-100"><i className="fa-solid fa-file-import" /> Import Modpack </button>
                <button className="btn w-100"><i className="fa-solid fa-file-export" /> Export Modpack </button>
                <div className="m-3" />
                <button className="btn w-100"><i className="fa-solid fa-download" /> Download Modpack </button>
            </div>
        </>
    )
}