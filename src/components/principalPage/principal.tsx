import "./principal-styles.css";

import { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Animated } from "react-animated-css";

export default function Principal() {
  const [animateContato, setAnimateContato] = useState(false);

  const parallax = useRef<IParallax>(null!);
  const parallaxContainer = useRef(null);
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="containerParallax">
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <div className="containerFirstPage">
            <div className="containerElementos">
              <div
                className="sobreNosContainer"
                onClick={() => parallax.current.scrollTo(0.5)}
              >
                <img src="/assets/aboutUs.png" className="iconInicial" />
                <span className="sobreNos">Sobre Nós</span>
              </div>
              <div
                className="contatoContainer"
                onClick={() => parallax.current.scrollTo(1)}
              >
                <img src="/assets/contato.png" className="iconInicial" />
                <span className="contato">Contato</span>
              </div>
              <div
                className="sobreNosContainer"
                onClick={() => parallax.current.scrollTo(2)}
              >
                <img src="/assets/parceiros.png" className="iconInicial" />
                <span className="sobreNos">Parceiros</span>
              </div>
            </div>

            <img src="assets/banner.png" className="banner" />
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.999} speed={1}>
          <div className="containerContatoPage">
            <div className="containerItensDisplay">
              <div className="containerItem">
                <img src="./assets/uniao.png" className="iconAboutUs" />
                <span className="aboutUsText">
                  Organizada e descomplicada. A Veplex acredita na união entre
                  pessoas
                </span>
              </div>
              <div className="containerItem">
                <img src="/assets/tecnologia.png" className="iconAboutUs" />
                <span className="aboutUsText">
                  Para nós processos e tecnologia são o combustível para o
                  crescimento de qualquer negócio.
                </span>
              </div>
              <div className="containerItem">
                <img src="/assets/gear.png" className="iconAboutUs" />
                <span className="aboutUsText">
                  Assim, conciliando nossos elementos essenciais, buscamos
                  desenvolver soluções inovadoras para nossos clientes
                </span>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="contatoPageContainer">
            <div className="containerImagemContato">
              <img
                src="/assets/contato.png"
                ref={parallaxContainer}
                className="imgContatoPage"
              />
            </div>
            <div className="elementosTextoContato">
              <span className="textoContato">Entre em contato conosco!</span>
              <span className="textoContatoDesc">
                Envie-nos um e-mail ou fale conosco diretamente por WhatsApp!
              </span>
              <span className="textoContatoDesc">
                Segunda a Sexta-feira, das 8:00h às 19:00.
              </span>
              <span className="textoContatoDesc">
                Rua Antonio Araújo, 1046, Sala 801 - Centro - Passo Fundo - RS
              </span>
            </div>
          </div>
          <div className="contatoButtons">
            <div>
              <img src="./assets/mail.png" alt="" className="buttonContato" />
            </div>
            <div>
              <img
                src="./assets/whatsapp.png"
                alt=""
                className="buttonContato"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={2}
          sticky={{ start: 2, end: 5 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className="containerImgLogo">
            <img src="/assets/logo-branca.png" className="LogoBranca" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={2}>
          <div className="containerImgParceiro">
            <img
              src="/assets/royal-trudel.png"
              className="logoParceiroRoyalTrudel logoParceiro"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={2.5}>
          <div className="containerImgParceiro">
            <img
              src="/assets/logo-oniz.png"
              className="logoParceiroOniz logoParceiro"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={3}>
          <div className="containerImgParceiro logoParceiro">
            <img
              src="/assets/logo-friolack.png"
              className="logoParceiroFriolack logoParceiro"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={4}>
          <div className="containerImgParceiro">
            <img
              src="/assets/logo-ofertao.png"
              className="logoParceiroOfertao logoParceiro"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
