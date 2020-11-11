
class Pasta extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` Pasta  is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.`;
    }
  }
  
  customElements.define('pasta-italian', Pasta);

  class gelato extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` Gelato  is a popular frozen dessert of Italian origin. It is generally made with a base of 3.25% milk and sugar. It is generally lower in fat than other styles of frozen desserts.`;
    }
  }
  
  customElements.define('gelato-dessert', gelato);

  class rissoto extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` Risotto  is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables`;
    }
  }
  
  customElements.define('creamy-rissoto', rissoto);

  class pizza extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `Pizza  is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.,   `;
    }
  }
  
  customElements.define('pizza-dish', pizza);

  class lasagna extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù (ground meats and tomato sauce)and other vegetables, cheese (which may include ricotta and parmesan), and  seasonings and spices such as garlic, oregano and basil`;
    }
  }
  
  customElements.define('lasagna-dish', lasagna);

  class spaghetti extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` Spaghetti is a long, thin, solid, cylindrical noodle pasta, It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolin `;
    }
  }
  
  customElements.define('spaghetti-dish', spaghetti);
