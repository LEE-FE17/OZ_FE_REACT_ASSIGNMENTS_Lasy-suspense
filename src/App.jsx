import React, { Suspense, lazy } from "react";
import "./App.css";

const TestComponent = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./TestComponent"));
    }, 3000); // 3초 지연
  })
);

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>

      <Suspense fallback={<div>🔥 로딩 중입니다...</div>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
