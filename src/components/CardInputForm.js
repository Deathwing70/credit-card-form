const CardInputForm = ({ data, setCardNumber }) => {
  function handleInputChange(name, value) {
    setCardNumber({ ...data, [name]: value });
  }

  return (
    <>
      <label>
        Card Number
        <input
          name="number"
          type="text"
          maxLength="16"
          value={data.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
          onFocus={(e) => handleInputChange("focus", e.target.name)}
        />
      </label>
      <label>
        Name
        <input
          name="name"
          type="text"
          maxLength="40"
          value={data.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          onFocus={(e) => handleInputChange("focus", e.target.name)}
        />
      </label>
    </>
  );
};

export default CardInputForm;
