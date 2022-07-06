import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Analysis from "./views/Analysis/Analysis";
import Management from "./views/Management/Management";
import MoneyCalculation from "./views/MoneyCalculation/MoneyCalculation";
import Settings from "./views/Settings/Settings";
import Stock from "./views/Stock/Stock";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="money-calculation" element={<MoneyCalculation />} />
        <Route path="stock" element={<Stock />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="management" element={<Management />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
