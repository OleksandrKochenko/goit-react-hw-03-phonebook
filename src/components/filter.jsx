const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name:
    <br />
    <input
      style={{ backgroundColor: 'darkgray' }}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
