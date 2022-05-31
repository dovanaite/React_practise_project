import UserForm from "../UserForm";

const InvalidAge = (props) => {
  return (
    <div>
      <div className="user-form__invalid">
        <h2>Invalid input</h2>
        <p>Please enter a valid age(&gt;0)</p>
        <button onClick={props.cancelInvalidHandler}>Okay</button>
      </div>
      <div className="blur_background">
        <UserForm />
      </div>
    </div>
  );
};

export default InvalidAge;
