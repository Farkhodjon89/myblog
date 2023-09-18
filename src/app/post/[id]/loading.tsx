import { Container, Skeleton } from '@mui/material'

export default function Loading() {
	return (
		<Container maxWidth="md">
			<Skeleton variant="circular" width={40} height={40} />
			<Skeleton variant="text" sx={{ fontSize: '1rem', marginY: '1em' }} />
			<Skeleton variant="rectangular" height={400} />
			<Skeleton variant="rounded" height={100} />
		</Container>
	)
}
