import { useEffect, useState } from "react";
import Input from "./components/input";
import DropDown from "./components/drop-down";
import Button from "./components/button";

export default function App() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [sections, setSections] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    getSections();
    getBrands();
  }, []);

  async function getSections() {
    try {
      const response = await fetch("http://localhost:3333/sections");

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      if (data.length > 0) {
        setSections(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function getBrands() {
    try {
      const response = await fetch("http://localhost:3333/brands");

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      if (data.length > 0) {
        setBrands(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  const onChangeName = event => {
    setName(event.target.value);
  };

  const onChangePrice = event => {
    setPrice(event.target.value);
  };

  const onChangeSection = event => {
    setSelectedSection(event.target.value);
  };

  const onChangeBrand = event => {
    setSelectedBrand(event.target.value);
  };

  return (
    <>
      <header className="w-[100%] h-[120px] flex flex-col justify-center">
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
