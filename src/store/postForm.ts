import { types } from 'mobx-state-tree'

const Post = types.model({
	id: types.maybe(types.number),
	title: types.maybe(types.string),
	body: types.maybe(types.string),
	userId: types.maybe(types.number),
	reactions: types.maybe(types.number),
	tags: types.array(types.maybe(types.string)),
})

export const PostFormStore = types
	.model({
		post: types.optional(Post, {}),
	})
	.actions(self => ({
		update(payload: any) {
			self.post = payload
		},
		setPostTitle(title: string) {
			self.post.title = title
		},

		setPostBody(body: string) {
			self.post.body = body
		},

		addPostTag(tag: string) {
			self.post.tags.push(tag)
		},

		deletePostTag(tag: string) {
			self.post.tags.remove(tag)
		},

		resetForm() {
			self.post.title = ''
			self.post.body = ''
		},
	}))
