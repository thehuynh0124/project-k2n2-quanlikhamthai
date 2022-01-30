import { PostContext } from '../contexts/PostContext'
import {AuthContext} from '../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/SinglePost'



const Dashboard = () => {
  //context
  /*const {authState: {user:{username}}} = useContext(AuthContext)

  const{postState: {posts, postsLoading},
  getPosts} = useContext(PostContext)

  //start: get all posts
  useEffect(() => getPosts(), [])

  let body = null
  
  if(postsLoading){
    body = (
      <div className="Spinner-container">
        <Spinner animaton =  'border' variant ='info' />
      </div>
    )
  }else if(posts.length == 0){
    body = (
      <>
        <Card className = 'text-center mx-5 my-5'>
          <Card.Header as='h1'>Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>Wellcome to my app</Card.Title>
            <Card.Text>
              chọn nút bên dưới
            </Card.Text>
            <Button variant= 'primary'>Learn</Button>
          </Card.Body>
        </Card>
      </>
    )
  }else{
    body= (
      <>
        <Row className= 'row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
          {posts.map(post =>(
            <Col key={post._id} className='my-2'>
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>
      </>
    )
  }*/


  return <div className = "home">
      <h1></h1>
  </div>
  
}

export default Dashboard;
