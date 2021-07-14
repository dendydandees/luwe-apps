class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section id="hero">
        <picture>
          <source media="(max-width: 425px)" srcset="/images/heros/hero-image_4-small.jpg" />
          <source media="(max-width: 768px)" srcset="/images/heros/hero-image_4-medium.jpg" />
          <img data-src="/images/heros/hero-image_4.jpg" alt="Luwe hero images" class="lazyload"/>
        </picture>
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
