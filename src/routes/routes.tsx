import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import Template from "../components/template/template";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Template />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
