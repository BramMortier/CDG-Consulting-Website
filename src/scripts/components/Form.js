class Form extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.setAttribute("role", "form")

		this.initEvents()

		console.log("form component")
	}

	initEvents() {}
}

customElements.define("js-form", Form)
