import Detail from "./Details";
import MoreDetails from "./MoreDetails";
import { DetailPageProps } from "@/types";

export default function DetailPage({ detailData }: DetailPageProps) {
  return (
    <main className="items-center py-16 bg-gray-200">
      <Detail detailData={detailData} />
      <MoreDetails detailData={detailData} />
    </main>
  );
}
