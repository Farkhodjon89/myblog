import PostsFeed from '@/components/homepage/postsFeed'
import { Container } from '@mui/material'

export default function Home() {
	return (
		<main>
			<Container maxWidth="md">
				<section>
					<PostsFeed />
				</section>
			</Container>
		</main>
	)
}
