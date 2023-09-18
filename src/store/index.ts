import { types } from 'mobx-state-tree'
import { UserStore } from './user'
import { PostFormStore } from './postForm'

export const RootStore = types
	.model({
		userStore: UserStore,
		postFormStore: PostFormStore,
	})
	.create({
		userStore: UserStore.create({}),
		postFormStore: PostFormStore.create({}),
	})
