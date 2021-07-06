class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="hero">
        <div>
            <h2>Lapar dan bingung mau makan dimana ?</h2>
            <p>
                Jangan khawatir, dengan <span style="font-weight: 700;">Luwe</span> kamu bisa temukan restoran di sekitarmu
            </p>
            <a href="#content">Cari Restoran</a>
        </div>
    </section>`;
  }
}

export default Hero;
