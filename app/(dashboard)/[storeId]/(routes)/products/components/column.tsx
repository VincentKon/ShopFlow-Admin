"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="size-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        ></div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}></CellAction>,
  },
];
