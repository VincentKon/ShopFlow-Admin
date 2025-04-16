"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import APIList from "@/components/ui/APIList";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        ></Heading>
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 size-4"></Plus>
          Add New
        </Button>
      </div>
      <Separator></Separator>
      <DataTable searchKey="label" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Billboards"></Heading>
      <Separator></Separator>
      <APIList entityIdName="billboardId" entityName="billboards"></APIList>
    </>
  );
};

export default BillboardClient;
