import PostSummary from '@/components/postPage/postSummary'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import dynamic from 'next/dynamic'

const PostForm = dynamic(() => import('@/components/shared/postForm'), { ssr: false })

type Props = {
	params: { id: number }
}

async function getData(id: number) {
	const res = await fetch(`${process.env.API_URL}/posts/${id}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export default async function PostPage({ params }: Props) {
	let post: Post = { id: 0, title: '', body: '', userId: 0, reactions: 0, tags: [] }

	if (params.id) {
		post = await getData(params.id)
	}

	return (
		<Container maxWidth="md">
			<section>
				<Typography variant="h4" component="h1">
					Редактирование
				</Typography>
				<PostForm data={post} />
			</section>
		</Container>
	)
}
