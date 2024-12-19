import * as images from "@assets/images"

export const content = {
	hero: {
		title: {
			text: "Waar Kunnen We Je Mee Helpen?",
			highlight: [4, 5, 6]
		},
		text: "Om een goed zicht te krijgen op je vraag en makkelijk met jou terug te koppelen kan je onderstaande stappen doorlopen. Met die info krijgen we direct een mooi overzicht en kunnen we zo beter helpen."
	},
	form: {
		tips: {
			title: {
				text: "Een paar handige tips"
			},
			text: "Lorem ipsum dolor sit amet. doloremque dignissimos deserunt reprehenderit deleniti ab quisquam fuga ullam dolores ut. Aspernatur, maiores repudiandae blanditiis et molestiae numquam"
		}
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
