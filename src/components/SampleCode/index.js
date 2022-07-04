import React from "react";
import { CodeBlock, atomOneLight } from "react-code-blocks";

import "./style.css";

const code = 
` <div class='golden-grid'>
     <div style='grid-area:
        11  / 1  / span 10  /  span 
         12;'>
     </div>
  </div>`

export default function SampleCode({}) {
  return (
    <div className="SampleCode-container">
      <h3>SampleCode</h3>
      <CodeBlock
        className="code-card"
        text={code}
        language={"javascript"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={atomOneLight}
        wrapLines={true}
      />
    </div>
  );
}
