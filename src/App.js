import { useState } from "react";
import Input from "./components/input";
import DropDown from "./components/drop-down";
import Button from "./components/button";

export default function App() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [section, setSection] = useState(null);
  const [brand, setBrand] = useState(null);

  const sections = [
    {
      value: 0,
      label: "Computadores",
    },
    {
      value: 1,
      label: "Acessórios",
    },
    {
      value: 2,
      label: "Impressoras",
    },
    {
      value: 3,
      label: "Games",
    },
    {
      value: 4,
      label: "Gadgets",
    },
  ];

  const brands = [
    {
      value: 0,
      label: "HP",
    },
    {
      value: 1,
      label: "Dell",
    },
    {
      value: 2,
      label: "Positivo",
    },
    {
      value: 3,
      label: "Asus",
    },
    {
      value: 4,
      label: "Xing Ling Genérico",
    },
  ];

  const onChangeName = event => {
    setName(event.target.value);
  };

  const onChangePrice = event => {
    setPrice(event.target.value);
  };

  const onChangeSection = event => {
    setSection(event.target.value);
  };

  const onChangeBrand = event => {
    setBrand(event.target.value);
  };

  return (
    <>
      <header className=" w-[100%] h-[120px] flex flex-col justify-center">
        <h1 className="text-[48px] text-green-400 text-center font-semibold uppercase tracking-[4px]">
          product registration
        </h1>
      </header>
      <main>
        <section className="flex flex-col my-[60px] items-center">
          <article className="w-[40%] py-[40px] flex flex-col rounded shadow ">
            <h2 className="text-[36px] text-green-400 text-center font-medium uppercase tracking-[4px]">
              insert new product
            </h2>
            <form className="flex flex-col mt-[40px] items-center gap-y-[22px]">
              <Input
                id="name"
                name="name"
                type="text"
                label="Name"
                placeholder="TV"
                value={name}
                onChange={onChangeName}
              />
              <Input
                id="price"
                name="price"
                type="number"
                label="Price"
                placeholder="$ 300.00"
                value={price}
                onChange={onChangePrice}
              />
              <DropDown id="section" name="section" label="Section" options={sections} onChange={onChangeSection} />
              <DropDown id="brand" name="brand" label="Brand" options={brands} onChange={onChangeBrand} />
              <div className="mt-[20px]">
                <Button id="insert-product" type="button" text="Insert" color="green-400" />
              </div>
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
