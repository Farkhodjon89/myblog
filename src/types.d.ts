type Post = {
	id: number
	title: string
	body: string
	userId: number
	tags: string[]
	reactions: number
}

type User = {
	id: number | undefined
	firstName: string | undefined
	lastName: string | undefined
	username: string | undefined
	image: string | undefined
}
