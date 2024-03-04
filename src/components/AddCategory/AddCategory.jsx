import { useState } from "react";
import style from "./AddCategory.module.scss";
export const AddCategory = ({ onNewCategory,categories }) => {
  const initial = "";
  const [inputValue, setInputValue] = useState(initial);
  const onInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    setInputValue("");
    onNewCategory(e, inputValue);
    
  };
  return (
    <form onSubmit={onSubmit} className={style.container}>
      <label htmlFor="add">Ingresar nombre</label>
      <input
      className={style.containerInput}
        type="text"
        id="add"
        placeholder="bucar gift"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className={style.containerButton}type="submit">Enviar</button>
    </form>
  );
};

// export default AddCategory;
