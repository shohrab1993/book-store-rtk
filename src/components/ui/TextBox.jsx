const TextBox = ({ label, ...rest }) => {
  return (
    <div className="space-y-2">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default TextBox;
