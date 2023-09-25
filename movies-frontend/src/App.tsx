import Menu from "./Menu";
import Router from "./Routes/Router";
import { routes } from "./Routes/route-config";

import configureValidations from "./Validation";

configureValidations();
function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Router routes={routes} />
      </div>
    </>
  );
}

export default App;
