import { useRouteError } from "react-router-dom";

function Root() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <main>Error page.</main>
    </div>
  );
}

export default Root;
