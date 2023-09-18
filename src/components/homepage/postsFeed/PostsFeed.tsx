import dynamic from 'next/dynamic'

import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Unstable_Grid2'

const PostCard = dynamic(() => import('@/components/shared/postCard'), {
	loading: () => <Skeleton variant="rectangular" height={220} />,
})

async function getData() {
	const res = await fetch(`${process.env.API_URL}/posts?select=id,title,userId,tags`)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export async function PostsFeed() {
	const { posts }: { posts: Post[] } = await getData()

	const items = posts.map(post => (
		<Grid key={post.id} xs={12}>
			<PostCard post={post} />
		</Grid>
	))

	return (
		<Grid container spacing={2}>
			{items}
		</Grid>
	)
}
