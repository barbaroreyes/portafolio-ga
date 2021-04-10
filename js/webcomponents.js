// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class TemplateExample extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
        <header>Hello World</header>
        <main>sahohoh</main>
        `
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("template-example", TemplateExample)