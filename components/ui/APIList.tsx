"use client";

import { useOrigin } from "@/hooks/useOrigin";
import { useParams } from "next/navigation";
import { APIAlert } from "./APIAlert";

interface APIListProps {
  entityName: string;
  entityIdName: string;
}

const APIList: React.FC<APIListProps> = ({ entityName, entityIdName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      ></APIAlert>
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>
      <APIAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      ></APIAlert>
      <APIAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>
      <APIAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>
    </>
  );
};

export default APIList;
