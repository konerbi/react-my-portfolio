import React from "react";
import AppRouter from "./AppRouter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => <AppRouter />;

export default App;
