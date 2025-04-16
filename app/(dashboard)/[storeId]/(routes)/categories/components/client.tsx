"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import APIList from "@/components/ui/APIList";

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        ></Heading>
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 size-4"></Plus>
          Add New
        </Button>
      </div>
      <Separator></Separator>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Categories"></Heading>
      <Separator></Separator>
      <APIList entityIdName="categoryId" entityName="categories"></APIList>
    </>
  );
};

export default CategoryClient;
