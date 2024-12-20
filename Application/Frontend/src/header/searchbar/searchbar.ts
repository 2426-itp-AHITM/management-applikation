import { html, render } from "lit-html"
import { style } from "./css_searchbar"

class Module extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }
    content(){
        return html`
            ${style}
            <input @keyup=${()=> this.updateSearch()} type="text" id="input" placeholder="Search">
        `
    }
    updateSearch(){
        const event = new CustomEvent("searchUpdated", {detail:{"value":"nothing"}})
        this.dispatchEvent(event)        
    }
    connectedCallback() {
        render(this.content(), this.shadowRoot)
    }

}
customElements.define("search-bar", Module)