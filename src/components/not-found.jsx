import React from "react";

function NotFound({ history }) {
  function handleReturn() {
    history.goBack();
  }

  return (
    <div className="container-master">
      <h2>404</h2>
      <p>Not Found</p>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
}

export default NotFound;
