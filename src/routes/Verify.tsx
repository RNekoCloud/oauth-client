import { useParams } from "react-router-dom"

const Verify = () => {
	const { token } = useParams()

	return (
		<>
			<h2>This is verify page</h2>
			<p>The token is { token }</p>
		</>
	)
}

export default Verify
