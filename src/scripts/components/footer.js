class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>${`Copyright &#169; ${new Date().getUTCFullYear()} - Luwe`}</p>
      </footer>
    `;
  }
}

export default Footer;
