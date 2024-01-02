import { ChangeEvent, useState } from "react";

export default function useForm<T>(yourForm: T) {
  const [form, setForm] = useState<T>(yourForm);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return [form, handleChange];
}
