export default function Settings({ data, setData }) {
  const { theme } = data;
  const handleChangeTheme = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="Dark"
          checked={theme === "Dark"}
          onChange={handleChangeTheme}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="Light"
          checked={theme === "Light"}
          onChange={handleChangeTheme}
        />
        Light
      </label>
    </div>
  );
}
