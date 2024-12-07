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
		text: "Lorem ipsum dolor sit amet. doloremque dignissimos deserunt reprehenderit deleniti ab quisquam fuga ullam dolores ut. Aspernatur, maiores repudiandae blanditiis et molestiae numquam deleniti ab quisquam fuga ullam  ipsum dolor sit amet. doloremque dignissimos deserunt reprehenderit",
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
			text: "Antieke restoratie",
			line: true
		},
		text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy "
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
		text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius inventore nihil. Cupiditate blanditiis dolore quia eligendi distinctio praesentium voluptate quos, rem alias aspernatur animi neque laboriosam sit assumenda ipsa dolorem esse fugit corrupti ipsam. Soluta blanditiis quos magni ex accusamus unde quam corrupti odit ipsam, vitae perspiciatis similique aperiam!"
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
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus recusandae expedita minus qui, vero commodi distinctio tenetur culpa quasi? Repudiandae accusamus Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet, consetetur sadipscing. commodi distinctio tenetur culpa."
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
				awnser: "De prijzen hangen af van de specifieke diensten die je nodig hebt. Neem contact op voor een offerte op maat."
			},
			{
				question:
					"Moeten wij dingen voorbereiden voor je langskomt aan huis?",
				awnser: "Het is niet verplicht, maar het is handig als je alvast ideeën, inspiratie of specifieke wensen kunt delen om het proces te versnellen."
			},
			{
				question: "Kunnen we ook om kleuradvies vragen?",
				awnser: "Ja, ik geef graag advies over kleuren die passen bij jouw ruimte, stijl en sfeer."
			},
			{
				question: "Wat houdt een bezoekje van jou precies in?",
				awnser: "Tijdens een bezoek bespreek ik je wensen en geef ik advies over inrichting, styling en mogelijke verbeteringen."
			},
			{
				question:
					"Is het mogelijk om 3D ontwerpen te maken van het interieur?",
				awnser: "Ja, ik kan een 3D-ontwerp maken om een visueel beeld te geven van hoe het interieur eruit kan komen te zien."
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
