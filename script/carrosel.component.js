class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                /* Estilos para o carrossel */
                .carousel-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    background-color: #333;
                    color: #fff; /* Cor do texto */
                    white-space: nowrap;
                    padding: 10px;
                    text-align: center;
                    z-index: 1000;
                }
                
                .carousel-text {
                    display: inline-block;
                    animation: moveText 15s linear infinite;
                }
                
                @keyframes moveText {
                    0%, 100% {
                        transform: translateX(100%);
                    }
                
                    50% {
                        transform: translateX(-100%);
                    }
                }
            </style>
            <div class="carousel-container">
                <div class="carousel-text" id="text-carousel">
                    <p>BTC $ 36559 &nbsp;|&nbsp; ETH $ 2104.71 &nbsp;|&nbsp; BNB $ 252.81</p>
                </div>
            </div>
        `;
  }
}

customElements.define("carousel-component", CarouselComponent);
