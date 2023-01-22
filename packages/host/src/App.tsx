import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RemoteCounter from "remote_app/Counter";

function App() {
  return (
    <>
      <h1>Host</h1>

      <ErrorBoundary fallbackRender={(e) => <>{e.error.message}</>}>
        <Suspense>
          <RemoteCounter />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
