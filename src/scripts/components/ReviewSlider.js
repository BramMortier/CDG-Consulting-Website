class ReviewSlider extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.initElements()
		this.initEvents()
	}

	initElements() {
		console.log(this)
	}

	initEvents() {}
}

customElements.define("js-review-slider", ReviewSlider)
