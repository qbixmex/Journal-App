import { ChangeEvent, useState } from "react";

const useForm = <T extends Object>( initialState: T) => {
  const [values, setValues] = useState<T>( initialState );

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setValues({
      ...values,
      [ name ]: value
    });
  };

  const reset = ( newState = initialState) => {
    setValues( newState );
  };

  return { values, handleInputChange, reset, ...values };
};

export default useForm;

