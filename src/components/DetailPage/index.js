import Detail from "./Details";
import MoreDetails from "./MoreDetails";

export default function DetailPage({ detailData }) {

    return(
        <main className="items-center py-16 bg-gray-200">
            <Detail detailData={detailData} />
            <MoreDetails detailData={detailData} />
        </main>
    )
}