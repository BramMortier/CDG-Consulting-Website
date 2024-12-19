class Form extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.initElements()
		this.initEvents()
	}

	initElements() {
		this.serviceButtons = [...this.querySelectorAll(".form__service")]
		this.questionsContainer = this.querySelector(".form__questions")
	}

	initEvents() {
		this.serviceButtons.forEach((button) => {
			button.addEventListener("click", () => {
				this.addQuestionBlock(button.dataset.service)
			})
		})
	}

	addQuestionBlock(service) {
		const element = document.createElement("div")
		element.classList.add("form-question")

		element.innerHTML = `
			<ul class="form__question">
				<h3 class="c-title">${service}</h3>

				<div class="c-input">
					<label class="c-input__label typo-body-medium" for="room">Ruimte</label>

					<input
						type="text"
						id="room"
						name="room"
						placeholder="Badkamer, Living, ..."
						class="c-input__field typo-body-medium"
					/>
				</div>
				
				<div class="c-input">
					<label class="c-input__label typo-body-medium" for="surface-area">Oppervlakte</label>

					<input
						type="text"
						id="surface-area"
						name="surface-area"
						placeholder="m²"
						class="c-input__field typo-body-medium"
					/>
				</div>

				<div class="c-textarea">
					<label class="c-textarea__label typo-body-medium" for="info"
						>Extra opmerkingen</label
					>
					<textarea
						id="info"
						name="info"
						placeholder="Opmerkingen"
						class="c-textarea__field typo-body-medium"
					>
					</textarea>
				</div>
			</ul>
		`

		this.questionsContainer.appendChild(element)
	}
}

customElements.define("js-form", Form)
