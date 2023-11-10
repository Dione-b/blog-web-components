class BlogHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                /* Estilos para o cabeçalho do blog */
                nav {
                  position: fixed;
                  top: 65px;
                  width: 100%;
                  background-color: #333;
                  color: white;
                  padding: 10px;
                  text-align: center;
              }
              
              nav header {
                  font-size: 1.5rem;
                  margin: 0;
              }
            </style>
            <nav>
                <header>B L O G | C R Y P T O</header>
            </nav>
        `;
  }
}

customElements.define("blog-header", BlogHeader);
