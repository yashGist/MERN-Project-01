import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../util/validators";

/* =========================
   INPUT REDUCER
========================= */
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

/* =========================
   INPUT COMPONENT
========================= */
const Input = (props) => {
  const {
    id,
    element,
    type,
    placeholder,
    rows,
    label,
    errorText,
    validators,
    onInput,
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  /* ✅ SAFE useEffect */
  useEffect(() => {
    if (onInput) {
      onInput(id, inputState.value, inputState.isValid);
    }
  }, [id, onInput, inputState.value, inputState.isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const inputElement =
    element === "textarea" ? (
      <textarea
        id={id}
        rows={rows || 3}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
