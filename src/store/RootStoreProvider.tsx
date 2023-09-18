'use client'

import { enableStaticRendering } from 'mobx-react-lite'
import { type ReactNode, createContext, useContext } from 'react'
import { RootStore } from './'

enableStaticRendering(typeof window === 'undefined')

let store: typeof RootStore
const StoreContext = createContext<typeof RootStore | undefined>(undefined)
StoreContext.displayName = 'StoreContext'

export function useRootStore() {
	const context = useContext(StoreContext)
	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider')
	}

	return context
}

export function useUserStore() {
	const { userStore } = useRootStore()
	return userStore
}

export function usePostFormStore() {
	const { postFormStore } = useRootStore()
	return postFormStore
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
	const store = initializeStore()

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(): typeof RootStore {
	const _store = store ?? RootStore

	if (typeof window === 'undefined') return _store
	if (!store) store = _store

	return _store
}
