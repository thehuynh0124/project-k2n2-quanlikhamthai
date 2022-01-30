import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Diseases = () => {

	return (
		<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
                <Button
					variant='primary'
					href='http://localhost:3001/api/diseases/getdiseases'
					size='lg'
				>
				    Get all Diseases
				</Button>
			</Col>
		</Row>
	)
}

export default Diseases