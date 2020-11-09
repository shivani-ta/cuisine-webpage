
// without using shadow DOM  
class Style extends HTMLElement {
  constructor(){
    super();
  }
  connectedCallback() {

    this.innerHTML = '<H2>Welcome</H2>';
  }
}
customElements.define('no-style', Style);



const template = document.createElement('template');
template.innerHTML = `<style>h2{color:blue;}</style><h2></h2>
  <div float ="inline-block"></div>
  <button>Order </button>` ;

class Chilaquiles extends HTMLElement {

  connectedCallback() {
    this.attachShadow({ mode: 'open' });  
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
  this.shadowRoot.querySelector("button").addEventListener("click", () => alert("ordered Chilaquiles "));

  }
}
customElements.define('chila-quiles', Chilaquiles);


class Pozole extends HTMLElement {

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector("button").addEventListener("click", () => alert("ordered Pozole "));

  }

}
customElements.define('poz-ole', Pozole);

class Enchalida extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector("button").addEventListener("click", () => alert("ordered Enchalida "));

  }

}
customElements.define('encha-lida', Enchalida);

class ChoriPollo extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector("button").addEventListener("click", () => alert("ordered ChoriPollo "));

  }

  disconnectedCallback(){
    this.shadowRoot.querySelector("button").removeListener('click');
  }

}
customElements.define('chori-pollo', ChoriPollo);





