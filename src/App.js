import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import HomePage from "./pages/HomePage";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
