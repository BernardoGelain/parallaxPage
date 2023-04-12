import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Principal from "../components/principalPage/principal";
import Second from "../components/secondParallax/second";

import Template from "../components/template/template";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Principal />} />
        <Route path="/template" element={<Template />} />
        <Route path="/second" element={<Second />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
