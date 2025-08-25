export default function Home({ data, setData, error }) {
  const { name, age, email } = data;
  const handleInputData = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };
  return (
    <div className="HomeData">
      <label htmlFor="">Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => handleInputData(e, "name")}
      />
      {error.name && <div className="nameError">{error.name}</div>}
      <label htmlFor="">Age : </label>
      <input
        type="number"
        value={age}
        onChange={(e) => handleInputData(e, "age")}
      />
      {error.age && <div className="nameError">{error.age}</div>}
      <label htmlFor="">Email : </label>
      <input
        type="text"
        value={email}
        onChange={(e) => handleInputData(e, "email")}
      />
      {error.email && <div className="nameError">{error.email}</div>}
    </div>
  );
}
