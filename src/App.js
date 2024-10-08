import { useEffect, useState } from "react";
import Input from "./components/input";
import DropDown from "./components/drop-down";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Section from "./components/section";
import Swal from "sweetalert2";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isNew, setIsNew] = useState(false);

  const [sections, setSections] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedSection, setSelectedSection] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    getSections();
    getBrands();
    getProducts();
  }, []);

  async function getSections() {
    try {
      const response = await fetch("http://localhost:3333/sections");

      if (!response.ok) {
        throw new Error("Internal error");
      }

      const data = await response.json();

      if (data.length > 0) {
        setSections(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getBrands() {
    try {
      const response = await fetch("http://localhost:3333/brands");

      if (!response.ok) {
        throw new Error("Internal error");
      }

      const data = await response.json();

      if (data.length > 0) {
        setBrands(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const response = await fetch("http://localhost:3333/products");

      if (!response.ok) {
        throw new Error("Internal error");
      }

      const data = await response.json();

      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function addProduct() {
    try {
      if (!validateForm()) {
        throw new Error("Fill in all the form fields to register a product.");
      }

      let data = {
        section: selectedSection,
        brand: selectedBrand,
        brandLogo: brands.filter(brand => brand.id === selectedBrand)[0].logo,
        name: name,
        price: price,
        isNew: isNew,
      };

      const response = await fetch("http://localhost:3333/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Internal error");
      }

      setProducts([
        ...products,
        {
          section: selectedSection,
          brand: selectedBrand,
          brandLogo: brands.filter(brand => brand.id === selectedBrand)[0].logo,
          name: name,
          price: price,
          isNew: isNew,
        },
      ]);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "A new product has been successfully registered.",
      });

      clearForm();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oopss...",
        text: error.message,
      });
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

  const checkIsNew = () => {
    setIsNew(!isNew);
  };

  const validateForm = () => {
    if (!name || !price || !selectedBrand || !selectedSection) {
      return false;
    }

    return true;
  };

  const clearForm = () => {
    setName("");
    setPrice("");
    setIsNew(false);
    setSelectedBrand("");
    setSelectedSection("");
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
              <DropDown
                id="section"
                name="section"
                label="Section"
                value={selectedSection}
                options={sections}
                onChange={onChangeSection}
              />
              <DropDown
                id="brand"
                name="brand"
                label="Brand"
                value={selectedBrand}
                options={brands}
                onChange={onChangeBrand}
              />

              <Checkbox
                id="is-new-product-check"
                name="is-new-product-check"
                label="This products is new?"
                value={isNew}
                isChecked={isNew}
                onChange={checkIsNew}
              />

              <Button id="insert-product" type="button" text="Insert" onClick={addProduct} />
            </form>
          </article>
        </section>
        <section>
          <article>
            <h2 className="text-[36px] text-green-400 text-center font-medium uppercase tracking-[4px]">
              list of the products
            </h2>
            <div className="flex flex-col gap-y-[60px] my-[80px] mx-[40px]">
              {products.length > 0 ? (
                sections.map((section, index) =>
                  products.filter(product => product.section === section.id).length > 0 ? (
                    <Section
                      key={index}
                      title={section.name}
                      items={products.filter(product => product.section === section.id)}
                    />
                  ) : (
                    ""
                  )
                )
              ) : (
                <p className="text-[22px] text-center">Nenhum produto cadastrado.</p>
              )}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
