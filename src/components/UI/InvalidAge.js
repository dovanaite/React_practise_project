const InvalidAge = (props) => {
  return (
    <div className="user-form__invalid">
      <h2>Invalid input</h2>
      <p>Please enter a valid age(&gt;0)</p>
      <button onClick={props.onCancel}>Okay</button>{" "}
    </div>
  );
};

export default InvalidAge;
