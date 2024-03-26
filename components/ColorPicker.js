const colors = [
  {
    name: "red",
    value: "#ff0000",
  },
];

const ColorPicker = () => {
  return (
    <div
      style={{
        backgroundColor: colors[0].value,
      }}
    >
      ColorPicker
    </div>
  );
};
export default ColorPicker;
