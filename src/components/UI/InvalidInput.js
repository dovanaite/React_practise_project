
const InvalidInput = (props) => {
 

  return (
    <div onClick={props.onCancel}>
    <div className="user-form__invalid" >
      <h2>Invalid input</h2>
      <p>Please enter a valid name and age (non-empty values)</p>
      <button onClick={props.onCancel}>Okay</button>
    </div>
    </div>
   
  );
};

export default InvalidInput;
