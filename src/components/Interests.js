export default function Interests({ data, setData, error }) {
  const { interests } = data;
  function handleInterests(e, name) {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  }
  console.log(interests);
  return (
    <div className="InterestsData">
      <label htmlFor="">
        <input
          type="checkbox"
          name="playing"
          checked={data.interests.includes("playing")}
          onChange={handleInterests}
        />
        Playing
      </label>

      <label htmlFor="">
        <input
          type="checkbox"
          name="video Games"
          checked={data.interests.includes("video Games")}
          onChange={handleInterests}
        />
        video Games
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          name="music"
          checked={data.interests.includes("music")}
          onChange={handleInterests}
        />
        music
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          name="reading"
          checked={data.interests.includes("reading")}
          onChange={handleInterests}
        />
        Reading
      </label>
      {error.interests && <div className="nameError">{error.interests}</div>}
    </div>
  );
}
