import useForm from "./useForm";

function UserForm() {
  const [form, handleChange] = useForm<{ username: string; email: string }>({
    username: "",
    email: "",
  });

  return (
    <form>
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="email"
          value={form()}
        />
        <input type="text" onChange={handleChange} name="username" />
      </div>
    </form>
  );
}
