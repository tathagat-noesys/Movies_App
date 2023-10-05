const DisplayErrors = (props: displayErrorProps) => {
  const style = { color: "red" };
  return (
    <>
      {props.errors ? (
        <ul>
          {props.errors?.map((err, ind) => {
            return (
              <li key={ind + Date.now()} style={style}>
                {err}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default DisplayErrors;

interface displayErrorProps {
  errors?: string[];
}