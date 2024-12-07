class MobileMenuButton extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.initEvents()
	}

	initEvents() {
		this.addEventListener("click", (event) => {
			if (this.className.includes("open")) {
				document.body.classList.add("c-mobile-menu--open")
			} else {
				document.body.classList.remove("c-mobile-menu--open")
			}
		})
	}
}

customElements.define("js-mobile-menu-button", MobileMenuButton)
