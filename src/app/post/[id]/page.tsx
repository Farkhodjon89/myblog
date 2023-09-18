import PostSummary from '@/components/postPage/postSummary'
import { Container, Typography } from '@mui/material'

type Props = {
	params: { id: number }
}

export default async function PostPage({ params }: Props) {
	return (
		<Container maxWidth="md">
			<section>
				<PostSummary id={params.id} />
			</section>
		</Container>
	)
}
