import { useRef, useState } from "react";
import { AddCategory, GiftGrid } from "./components";

const GiftExpertApp = () => {
  const initial = [];
  const [categories, setCategories] = useState(initial);
  //   const inputNombre=useRef()

  const onAddCategory = (e, value) => {
    // if (value.trim().length < 1) return;
    if (categories.includes(value)) {
      alert(`ya existe ${value}`);
      return;
    }
    setCategories((cat) => [value, ...cat]);

    // setCategories([inputNombre.current.value,...categories]);
    // setCategories((cat)=>[...cat,'imagenes']);
  };
  const deleteCategory = (value) => {
    const newCategories=categories.filter((category) => category !== value);
    setCategories([...newCategories])
    console.log(categories)
  };
  //   const handleChange=(e)=>{
  //     inputNombre=e.target.value
  //   }
  return (
    <>
      {/* titulo     */}
      <h1>GIftExpertApp</h1>
      {/* <h2>{categories}</h2> */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* input */}
      {/* <label htmlFor="add">Ingresar nombre</label>
      <input ref={inputNombre} type="text" id="add" /> */}
      {/* listado de gifts */}
      {/* <button onClick={handleCategories} >add</button> */}

      {categories.map((category) => (
        <GiftGrid key={category} category={category} deleteCategory={deleteCategory}/>
      ))}
    </>
  );
};

export default GiftExpertApp;
