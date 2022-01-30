import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
//import ActionButtons from './ActionButtons'


const SinglePost = ({post: {_id, status, title, description, url}}) => (
    <Card className='shadow' 
        border= {
            status === 'LEANED' 
            ? 'success'
            : status === 'LEARNING'
            ? 'warning'
            : 'danger'
        }
    >
        <Card.Body>
            <Card.Title>
                <Row>
                    <Col>
                        <p className='post-title'>{title}</p>
                        <Badge pill variant={
                                status === 'LEANED' 
                                ? 'success'
                                : status === 'LEARNING'
                                ? 'warning'
                                : 'danger'
                            }   
                        >
                            {status}
                        </Badge>
                    </Col>
                    
                    <col className='text-right'>
                        Button
                    </col>
                </Row>
            </Card.Title>

        </Card.Body>

    </Card>
)

export default SinglePost