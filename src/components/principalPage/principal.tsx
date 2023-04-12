import "./principal-styles.css";

import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

// Little helpers ...

export default function Principal() {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="containerParallax">
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <div className="containerFirstPage">
            <div className="containerElementos">
              <span className="contato">Contato</span>
              <span className="sobreNos">Sobre Nós</span>
            </div>
            <img src="assets/banner.png" className="banner" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#FFFF" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#FFFF" }}
        />
      </Parallax>
    </div>
  );
}
