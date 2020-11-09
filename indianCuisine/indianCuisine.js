class ButterChicken extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` Butter chicken or murg makhani is a dish of chicken in a spiced tomato, butter and cream sauce. It originated in the Indian subcontinent.<br>`+`<img src ="bc.jpg" width="100" height="100">`;
    }
}

customElements.define('butter-chicken', ButterChicken);



class PaneerTikka extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`Paneer is an Indian cheese that’s made from curdled milk and some sort of fruit or vegetable acid like lemon juice. This easy paneer tikka masala recipe features homemade paneer and red bell pepper. This is a simple, vegetarian Indian recipe the whole family will love! <br>`+`<img src ="pan.jpg" width="100" height="100">`;
    }
}

customElements.define('paneer-tikka', PaneerTikka);

class IndianBread extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` Breads in India are mostly flatbreads. It’s the way they are cooked or the type of flour used to make them that determines what they are called.<br>`+`<img src ="bread.jpg" width="100" height="100">`;
    }
}

customElements.define('indian-bread', IndianBread);

class LambBiryani extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `Indian Lamb Biryani is a casserole of tender lamb curry and fragrant saffron rice. Two outstanding dishes combined into one company worthy casserole. Serve with cooling cucumber raita on the side. <br>`+`<img src ="biryani.jpg" width="100" height="100">`;
    }
}

customElements.define('lamb-biryani', LambBiryani);

class MasalaChai extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` Indo-Chinese and just divine, skip the take-out and savour this boneless chilli chicken
             in the comfort of your home. Team it with fried rice or just have it stand-alone, this spicy and delectable dish
            is a show-stealer. <br>`+`<img src ="chai.jpg" width="100" height="100">`;
    }
}

customElements.define('masala-chai', MasalaChai);

class ChickpeaCurry extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` Chole is an Indian dish popularly known as ‘chickpea curry’. In Indian`+
        ` cuisine it is also known as chole masala due to the various kinds of spices used. This dish is quite popular in North Indian Punjabi cuisine,`+
        ` but other Indian regions also make chole with distinctive styles. It is a nice option for vegans and vegetarians. The color and taste of the`+
        ` dish depends upon the recipe used. <br>`+`<img src ="Chic.jpg" width="100" height="100">`;
    }
}

customElements.define('chickpea-curry', ChickpeaCurry);

class MasalaDosa extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `A dosa is a rice pancake, originating from South India,` +
            ` made from a fermented batter.Its main ingredients are rice and black gram,` +
            ` ground together in a fine, smooth batter with a dash of salt,` +
            ` then fermented. Dosas are a common part of the diet in South India,` +
            ` but have become popular all over the Indian subcontinent. <br>`+`<img src ="dosa.jpg" width="100" height="100">`;
    }
}

customElements.define('masala-dosa', MasalaDosa);



class GulabJamun extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `GulabJamun is a well-known and popular Indian dessert made of fried dough balls. A type of dumpling,` +
            ` gulab jamun is soaked in a sweet, sticky syrup. Gulab means 'rose water' so, as per tradition,` +
            ` the sugar syrup has a delicate rose flavour. <br>`+`<img src ="g.jpg" width="100" height="100">`;
    }
}

customElements.define('gulab-jamun', GulabJamun);

class DalMakni extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` Dal is a term used in the Indian subcontinent for dried,` +
            ` split pulses (that is, lentils, peas, and beans) that do not require pre-soaking. India is the largest producer of pulses in the world.<br>`+`<img src ="dal.jpg" width="100" height="100">`;
           
    }
}

customElements.define('dal-makni', DalMakni);



