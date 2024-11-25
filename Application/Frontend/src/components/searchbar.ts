import { html, render } from "lit-html"
import { style } from "./css_searchbar"

const content = html`
    ${style}
    <script>
console.log("dsdf")
    </script>
    <input onchange="generateEntries()" type="text" id="searchbar" placeholder="Search">
`

class Module extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback() {
        render(content, this.shadowRoot)
    }
}
customElements.define("search-bar", Module)