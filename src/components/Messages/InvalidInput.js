
const InvalidInput = (props) => {

    const cancelInvalidHandler=()=>{
        return console.log('canceled')
    }
   
  return (
    <div className="user-form__invalid">
            <h2>Invalid input</h2>
            <p>Please enter a valid name and age (non-empty values)</p>
            <button onClick={cancelInvalidHandler}>Okay</button>
          </div>

  );
};

export default InvalidInput;
