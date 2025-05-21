interface ProductComponentProps {
  item: { imageUrl: string; name: string; description: string; price: number };
}

export function ProductComponent({ item }: ProductComponentProps) {
  return (
    <div className="flex pr-4 border-b pl-0 border-gray-300 last:border-none">
      <div className="relative w-[45%] h-40 overflow-hidden rounded-r-xl">
        <img
          src={item.imageUrl}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </div>

      <div className="flex flex-col w-[55%] pl-4 justify-between py-3">
        <div>
          <h3 className="font-semibold font-montserrat text-neutral-600">
            {item.name}
          </h3>
          <p className="text-sm text-neutral-500">{item.description}</p>
        </div>

        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold text-neutral-600 w-[40%]">
            R$ {item.price.toFixed(2).replace(".", ",")}
          </p>
          <button className="bg-primary text-white py-1 font-semibold text-sm font-roboto w-[60%] rounded-full">
            Escolher
          </button>
        </div>
      </div>
    </div>
  );
}
