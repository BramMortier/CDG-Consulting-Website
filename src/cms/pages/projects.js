import * as images from "@assets/images"
import * as projectImages from "@assets/images/projects/index"

export const content = {
	hero: {
		title: {
			text: "Ontdek een Diverse Reeks van Verfrissende Interieur-Ontwerpen",
			highlight: [3, 4, 6]
		}
	},
	gallery: [
		{
			name: "images-60-30",
			props: {
				images: [
					{
						src: projectImages.project_1,
						alt: "project image 1"
					},
					{
						src: projectImages.project_2,
						alt: "project image 2"
					}
				]
			}
		},
		{
			name: "image-left",
			props: {
				image: {
					src: projectImages.project_3,
					alt: "project image 3"
				}
			}
		},
		{
			name: "image-right",
			props: {
				image: {
					src: projectImages.project_4,
					alt: "project image 4"
				}
			}
		},
		{
			name: "image-left",
			props: {
				image: {
					src: projectImages.project_5,
					alt: "project image 5"
				},
				isContained: true
			}
		},
		{
			name: "images-30-30-30",
			props: {
				images: [
					{
						src: projectImages.project_6,
						alt: "project image 6"
					},
					{
						src: projectImages.project_7,
						alt: "project image 7"
					},
					{
						src: projectImages.project_8,
						alt: "project image 8"
					}
				]
			}
		},
		{
			name: "image-right",
			props: {
				image: {
					src: projectImages.project_9,
					alt: "project image 9"
				},
				isContained: true
			}
		},
		{
			name: "images-30-60",
			props: {
				images: [
					{
						src: projectImages.project_10,
						alt: "project image 10"
					},
					{
						src: projectImages.project_11,
						alt: "project image 11"
					}
				]
			}
		}
	],
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
