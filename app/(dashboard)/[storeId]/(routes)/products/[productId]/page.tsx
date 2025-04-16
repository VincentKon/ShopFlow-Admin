import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/ProductForm";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const formattedProduct = product
    ? {
        ...product,
        price: product.price.toNumber(),
      }
    : null;

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          // @ts-ignore
          initialData={formattedProduct}
          categories={categories}
          sizes={sizes}
          colors={colors}
        ></ProductForm>
      </div>
    </div>
  );
};

export default ProductPage;
