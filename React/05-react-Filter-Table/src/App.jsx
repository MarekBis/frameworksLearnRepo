import { useState } from 'react';
import './App.css'
const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="wholeTable flex">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable
        inStockOnly={inStockOnly}
        filterText={filterText}
        products={products} />
    </div>
  )
};
const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {

  return (
    <form>
      <input type="text" value={filterText} onChange={(event) => { onFilterTextChange(event.target.value) }} name="search" placeholder="Search" id="search" />
      <div>
        <input type="checkbox" onChange={(event) => { onInStockOnlyChange(event.target.checked) }} checked={inStockOnly} name="inStock" id="inStock" />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </form>
  )
};
const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().includes(filterText.toLowerCase())) {

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        )
      }
      if (inStockOnly) {
        if (product.stocked) {
          rows.push(
            <ProductRow
              product={product}
              key={product.name} />)
        }
      } else {
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />)
      }


      lastCategory = product.category;

    }
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows == "" ?<tr><td colSpan={2}>No matches</td></tr> :<>{rows}</>}
        </tbody>
      </table>
    </>
  )
};
const ProductCategoryRow = ({ category }) => {

  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
};
const ProductRow = ({ product }) => {

  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>{product.price}</td>
    </tr>
  )
};

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
