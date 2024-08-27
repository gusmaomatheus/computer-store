import Card from "./card";

export default function Section({ title, items }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[32px] text-center uppercase underline">{title}</h3>
      <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[60px] my-[40px] mx-[40px]">
        {items.map((item, index) => (
          <Card key={index} brandLogo={item.brandLogo} name={item.name} price={item.price} isNew={item.isNew} />
        ))}
      </div>
    </div>
  );
}
