import { dataTest } from "../_constants/constants";
import { IData } from "../_interfaces/interfaces";
import { columns } from "./DataTable/columns";
import { DataTable } from "./DataTable/data-table";
import { formatarHora } from "../_functions/hour";

export default function Search() {
  const formatData = dataTest.map((item: IData) => ({
    ...item,
    data: item.data.toLocaleDateString("en-gb"),
    hora: formatarHora(item.data),
  }));

  return (
    <section className="min-h-screen px-4">
      <DataTable columns={columns} data={formatData} />
    </section>
  );
}
