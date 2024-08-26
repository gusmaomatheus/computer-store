import { useEffect, useState } from "react";
import Input from "./components/input";
import DropDown from "./components/drop-down";
import Button from "./components/button";
import Card from "./components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import Checkbox from "./components/checkbox";

library.add(faCircleNotch);

export default function App() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [isNew, setIsNew] = useState(false);

  const [sections, setSections] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isSubmtingForm, setIsSubmtingForm] = useState(false);

  useEffect(() => {
    getSections();
    getBrands();
    getProducts();
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

  async function getProducts() {
    try {
      setIsLoadingProducts(true);

      const response = await fetch("http://localhost:3333/products");

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoadingProducts(false);
    }
  }

  async function addProduct() {
    try {
      setIsSubmtingForm(true);

      if (!validateForm()) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const response = await fetch("http://localhost:3333/products", {
        method: "POST",
        body: {
          section: selectedSection,
          brand: selectedBrand,
          brandLogo: brands.filter(brand => brand.id === selectedBrand)[0].logo,
          name: name,
          price: price,
          isNew: isNew,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
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

      clearForm();
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsSubmtingForm(false);
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
    setName(null);
    setPrice(null);
    setIsNew(false);

    setSelectedBrand(null);
    setSelectedSection(null);
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

              <Checkbox
                id="is-new-product-check"
                name="is-new-product-check"
                label="This products is new?"
                onClick={checkIsNew}
              />

              <Button
                id="insert-product"
                type="button"
                text={isSubmtingForm ? "Sending..." : "Insert"}
                onClick={addProduct}
                disabled={isSubmtingForm}
              />
            </form>
          </article>
        </section>
        <section>
          <article>
            <h2 className="text-[36px] text-green-400 text-center font-medium uppercase tracking-[4px]">
              list of the products
            </h2>
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[60px] my-[80px] mx-[40px]">
              {isLoadingProducts ? (
                <FontAwesomeIcon icon="fas fa-circle-notch" spin size="xl" className="text-green-400" />
              ) : products.length > 0 ? (
                products.map((product, index) => (
                  <Card
                    key={index}
                    brandLogo={product.brandLogo}
                    name={product.name}
                    price={product.price}
                    isNew={product.isNew}
                  />
                ))
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
