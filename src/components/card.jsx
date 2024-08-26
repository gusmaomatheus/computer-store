export default function Card({
  brandLogo = "assets/images/asus-logo.png",
  name = "Nome",
  price = "300.00",
  isNew = true,
}) {
  return (
    <div className="w-[400px] h-[320px] flex flex-col rounded-md shadow">
      <div className="h-[40%] flex flex-col items-center justify-center bg-green-50 border-b-2 border-gray-300">
        <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden border-[1px] border-gray-300 rounded-full">
          <img src={brandLogo} alt="Brand logo of the product" className="max-w-full max-h-full" />
        </div>
      </div>
      <div className="flex flex-col mt-[40px] gap-y-[5px]">
        <p className="text-[22px] text-center">{name}</p>
        <p className="text-[22px] text-center">$ {price}</p>
        <p className="text-[22px] text-center">{isNew ? "Novo" : "Usado"}</p>
      </div>
    </div>
  );
}
