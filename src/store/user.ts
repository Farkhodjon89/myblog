import { types } from 'mobx-state-tree'

const User = types.model({
	id: types.maybe(types.number),
	firstName: types.maybe(types.string),
	lastName: types.maybe(types.string),
	username: types.maybe(types.string),
	image: types.maybe(types.string),
})

export const UserStore = types
	.model({
		user: types.optional(User, {}),
	})
	.actions(self => ({
		update(payload: User) {
			self.user = payload
		},
		reset() {
			self.user = User.create({})
		},
	}))
	.views(self => ({
		get id() {
			return self.user.id
		},
		get firstName() {
			return self.user.firstName
		},
		get lastName() {
			return self.user.lastName
		},
		get username() {
			return self.user.username
		},
		get image() {
			return self.user.image
		},
	}))
