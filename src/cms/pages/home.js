import * as images from "@assets/images"
import * as transformations from "@assets/images/transformations"

export const content = {
	hero: {
		title: {
			text: "Tijdloos, Elegant & Modern Interieur Design Op Maat",
			highlight: [4, 5, 6]
		},
		text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
		images: [
			{ src: images.hero_1, alt: "hero image 1" },
			{ src: images.hero_2, alt: "hero image 2" }
		]
	},
	expertise: {
		title: {
			text: "Onze Expertise",
			highlight: [1, 2],
			line: true
		},
		text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo",
		cards: [
			{
				title: {
					text: "Vloeren en tegels"
				},
				text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy ",
				link: {
					label: "Meer informatie",
					href: "/contact"
				}
			},
			{
				title: {
					text: "3D Ontwerpen"
				},
				text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy ",
				link: {
					label: "Meer informatie",
					href: "/contact"
				}
			},
			{
				title: {
					text: "Meubels & Interieur"
				},
				text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy ",
				link: {
					label: "Meer informatie",
					href: "/contact"
				}
			},
			{
				title: {
					text: "Verfkleur Advies"
				},
				text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy ",
				link: {
					label: "Meer informatie",
					href: "/contact"
				}
			}
		]
	},
	callToAction: {
		title: {
			text: "Heb je ook een transformatie in gedachten?"
		},
		text: "Welke ruimte je ook wil aanpakken, keuken, badkamer, trap en trappenhal, zolder...",
		list: [
			"centraal aanspreekpunt",
			"Volledige coördinatie",
			"Begeleiding van het project",
			"Budgetbeheersing"
		],
		button: {
			label: "Ga ervoor!",
			href: "/contact"
		}
	},
	split: {
		title: {
			text: "Innovatieve Oplossingen Om Je Ruimte Een Nieuw Leven In te Blazen",
			highlight: [7, 8, 9, 10, 11]
		},
		images: [
			{ src: transformations.before_1, alt: "before image 1" },
			{ src: transformations.after_1, alt: "after image 1" }
		],
		subtitle: {
			text: "Optimalisatie van een bestaande keuken",
			line: true
		},
		text: "Het vervangen van grepen ,scharnieren ,toestellen en het schilderen of het luchtgommen wanneer de deuren bestaand uit massieve eik kunnen we de keuken een nieuwe look geven. Voor meer toelichting kan je ons steeds contacteren. De keukenruimte kan volledig aangepakt worden."
	},
	splitAlt: {
		images: [
			{ src: transformations.before_1, alt: "before image 1" },
			{ src: transformations.after_1, alt: "after image 1" }
		],
		title: {
			text: "Nieuw licht",
			line: true
		},
		text: "De verbeterde lichtopbrengst laat de ruimte schitteren. Alle details zijn belangrijk en hebben invloed op een betere werking in de keuken."
	},
	stack: {
		images: [
			{ src: transformations.before_1, alt: "before image 1" },
			{ src: transformations.after_1, alt: "after image 1" }
		],
		title: {
			text: "Een Productieve Upgrade",
			line: true
		},
		text: "De volledige remake met een eindresultaat waar elke WOW nog tekort schiet. Dat alles voor een betaalbaar budget."
	},
	faq: {
		image: {
			src: images.faq_1,
			alt: "faq image 1"
		},
		title: {
			text: "Veelgestelde vragen beantwoord",
			line: true
		},
		questions: [
			{
				question: "Wat zijn de prijzen voor jouw advies?",
				awnser: "Wenst u een eerste kennismaking en verkenning wie we zijn en wat we doen = (250€ incl btw ) dit wordt verrekend wanneer een project wordt gerealiseerd. Het opmaken en sturen van het project wordt gerekend per uur waar een volledig rapportwordt opgemaakt. (uur tarief 65€ per uur excl btw) Opvolging en sturing van project wordt niets meer in rekening gebracht,samenwerking met de aannemer."
			}
		]
	},
	reviews: {
		title: {
			text: "Enthousiaste Reacties Van Onze Klanten",
			highlight: [1, 2]
		},
		text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo",
		reviews: [
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_1,
					alt: "review author thumbnail"
				},
				rating: 3
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_2,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_3,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_4,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_5,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_1,
					alt: "review author thumbnail"
				},
				rating: 3
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_2,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_3,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_4,
					alt: "review author thumbnail"
				},
				rating: 5
			},
			{
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio",
				author: "John Doe",
				authorThumbnail: {
					src: images.review_author_5,
					alt: "review author thumbnail"
				},
				rating: 5
			}
		]
	},
	callToActionSplit: {
		title: {
			text: "Ben Je Overtuigd Of Heb Je Nog Vragen? Aarzel Niet Om Ons Te Contacteren",
			highlight: [1, 2, 3]
		},
		image: {
			src: images.call_to_action_1,
			alt: "call to action image 1"
		},
		buttons: [
			{
				label: "Contact",
				href: "/contact"
			},
			{
				label: "Meer projectwerk",
				href: "/projects"
			}
		]
	}
}
