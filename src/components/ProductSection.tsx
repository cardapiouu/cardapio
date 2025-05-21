import { ProductComponent } from "./ProductComponent";

interface ProductSectionProps {
  sectionTitle: string;
  sectionDescription?: string;
  products: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
  }[];
  ref?: any;
}

export const ProductSection = ({
  sectionTitle,
  sectionDescription,
  products,
  ref,
}: ProductSectionProps) => {
  return (
    <section className="flex flex-col w-full py-4 first:pt-4 pt-0" ref={ref}>
      <h2 className="font-montserrat font-bold text-xl px-4 w-full text-neutral-500">
        {sectionTitle}
      </h2>
      {sectionDescription && (
        <p className="text-sm font-roboto px-4 w-full text-justify mt-1 text-neutral-500">
          {sectionDescription}
        </p>
      )}

      <div className="flex flex-col gap-2 w-full mt-4 bg-gray-100 hover:bg-gray-50">
        {products.map((item) => (
          <ProductComponent item={item} />
        ))}
      </div>
    </section>
  );
};
