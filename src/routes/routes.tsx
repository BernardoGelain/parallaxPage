import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Second from "../components/secondParallax/second";

import Template from "../components/template/template";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Template />} />
        <Route path="/second" element={<Second />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
