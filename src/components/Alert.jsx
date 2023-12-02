//Alert.jsx
const Alert = ({ message, error }) => {
  const claseAlerta = error ? "alert alert-danger" : "alert alert-success";
  return (
    <div className={claseAlerta}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
