import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  const handlePrint = () => {
    window.print();
  };

  const MyLink = React.forwardRef((props, ref) => (
    <HomePage {...props} ref={ref} handlePrint={handlePrint} />
  ));

  return (
    <>
      <MyLink />
    </>
  );
}

export default App;
