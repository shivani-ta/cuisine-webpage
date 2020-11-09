function orderItem() {
    // document.querySelector('finalize-order').setAttributes('name,'Item Ordered');
    document.querySelector('finalize-order').name = 'Item Ordered';
    document.querySelector('finalize-order').show();
}
function menu() {
    document.querySelector('finalize-order').name = 'Finalize Order';
    document.querySelector('finalize-order').hide();
}


const template = document.createElement('template');
template.innerHTML = `<style>h2{color:blue;}</style><h2></h2>
  <h3 style="display:none;"> Thank You </h3>`;


class FinalizeOrder extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');


    }
    get name() {
        return this.shadowRoot.querySelector('h2').innerText;
    }
    set name(val) {
        this.shadowRoot.querySelector('h2').innerText = val;
    }

    hide() {
        this.shadowRoot.querySelector("h3").style.display = 'none';
    }

    show() {
        this.shadowRoot.querySelector('h3').style.display = 'block';
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'name') {
            this.shadowRoot.querySelector('h2').innerText = newValue;
        }
    }
}


customElements.define('finalize-order', FinalizeOrder);