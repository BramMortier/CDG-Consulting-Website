class FaqList extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.initElements()
		this.initEvents()
	}

	initElements() {
		this.setAttribute("role", "ul")

		this.faqItems = [...this.querySelectorAll(".c-faq-list__item")]
	}

	initEvents() {
		this.faqItems.forEach((item) => {
			item.addEventListener("click", (event) => {
				item.classList.toggle("c-faq-list__item--expanded")
			})
		})
	}
}

customElements.define("js-faq-list", FaqList)
