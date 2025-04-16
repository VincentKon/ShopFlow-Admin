"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import APIList from "@/components/ui/APIList";

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 size-4"></Plus>
          Add New
        </Button>
      </div>
      <Separator></Separator>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Products"></Heading>
      <Separator></Separator>
      <APIList entityIdName="productId" entityName="products"></APIList>
    </>
  );
};

export default ProductClient;
