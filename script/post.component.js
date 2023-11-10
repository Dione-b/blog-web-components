class PostComponent extends HTMLElement {
  static get observedAttributes() {
    return ["image-src", "title", "content", "post-date"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const imageSrc = this.getAttribute("image-src") || "./assets/image-01.webp";
    const title =
      this.getAttribute("title") ||
      "Principais criptomoedas de exchanges centralizadas";
    const content =
      this.getAttribute("content") ||
      "As criptomoedas de exchanges centralizados tornaram-se bilhetes de ouro para traders que buscam maximizar sua experiência em plataformas de negociação. Da Binance coin (BNB) e token KuCoin (KCS) a MEXC (MX), essas criptomoedas utilitárias oferecem uma infinidade de vantagens que podem tornar sua negociação econômica e contínua.";
    const postDate = this.getAttribute("post-date") || "8/11/2023";

    this.shadowRoot.innerHTML = `
        <style>
          /* Estilos para o componente do post */
          h2 {
            color: var(--second-color);
            font-size: 1rem;
            margin: 10px 0 15px 0;
            font-weight: bold;
          }
  
          .content > p {
            color: var(--third-color);
            text-align: justify;
            font-size: .9rem;
          }
  
          .container {
            max-width: 50rem;
            display: flex;
            margin-top: 120px;
            justify-content: center;
            margin-left: 14rem;
          }
  
          .post {
            margin-top: 30px;
            flex: 1;
            max-width: 20rem;
          }
  
          .post img {
            max-width: 100%;
            height: auto;
          }
  
          .footer {
            margin-top: 10px;
            font-size: .8rem;
            color: var(--clean-grey);
          }
  
          /* Estilos para telas menores (mobile) */
          @media (max-width: 600px) {
            .container {
              flex-direction: row; /* Alterado para linha em telas menores */
              align-items: initial; /* Adicionado para desativar a centralização vertical em telas menores */
            }
            
            .post {
              max-width: none; /* Removido a limitação de largura máxima em telas menores */
            }
          }
        </style>
        <article class="container">
          <section class="post">
            <img src="${imageSrc}" alt="Image about crypto">
            <header>
              <h2>${title}</h2>
            </header>
            <div class="content">
              <p>${content}</p>
            </div>
            <div class="footer">
              postado em: ${postDate}
            </div>
          </section>
        </article>
      `;
  }
}

customElements.define("post-component", PostComponent);
