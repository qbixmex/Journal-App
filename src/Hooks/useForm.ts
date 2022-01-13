import { ChangeEvent, useState } from "react";

const useForm = <T extends Object>( initialState: T) => {
  const [values, setValues] = useState<T>( initialState );

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setValues({
      ...values,
      [ name ]: value
    });
  };

  const reset = () => {
    setValues( initialState );
  };

  return { values, handleInputChange, reset, ...values };
};

export default useForm;

