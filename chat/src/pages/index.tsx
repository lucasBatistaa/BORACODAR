
import { Roboto } from '@next/font/google'
import styled from 'styled-components'
import { Header } from '../components/Header'


const StyledHome = styled.div`
	padding: 2.4rem 3.2rem;
	display: grid;
`

export default function Home() {
	return (
		<StyledHome>
			<Header />
		</StyledHome>
	)
}
