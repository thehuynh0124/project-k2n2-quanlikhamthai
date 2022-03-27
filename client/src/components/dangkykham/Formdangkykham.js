import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
import getDoctorAPI from '../../configAPI/DoctorAPI'
import React, { Component } from 'react'
import getHospitalAPI from '../../configAPI/HospitalAPI'





class FormDangkykham extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arrHospital:[],
            arrDoctor:[]
		}
	}

	async componentDidMount(){
		let responseDoctor = getDoctorAPI();
        let responseHospital = getHospitalAPI()

		if(responseDoctor){
			this.setState({
				arrDoctor: (await responseDoctor).data
			})
			console.log('check state doctor ', this.state.arrDoctor)
		}
        if (responseHospital){
            this.setState({
                arrHospital:(await responseHospital).data
            })
            console.log('check state hospital ', this.state.arrHospital)
		}
		
	}
    const 
    


render(){
	let arrDoctor = this.state.arrDoctor
    let arrHospital = this.state.arrHospital
  return (
	<>
    <Form className='dangkykham'>
        <h1>Đăng ký khám</h1>
        <AlertMessage info = {alert} />
        <Row>
            <Col>
                <h5>lần khám thứ:</h5>
                <Form.Group className='my-2'>
                    <Form.Control type = 'text'
                    size = 'mg'
                    width='10'
                    placeholder='lần khám' 
                    name='lankham' 
                    />
                </Form.Group>
            
            </Col>
            <Col>
                <h5>thời gian khám</h5>
                <Form.Group className='my-2'>
                        <Form.Control 
                        type = 'date'
                        size = 'mg'
                        placeholder='ngày khám' 
                        name='ngaykham' 
                        />
                </Form.Group>
                <Form.Group className='my-2'>
                        <Form.Control 
                        type = 'time'
                        size = 'mg'
                        placeholder='giờ khám' 
                        name='giokham' 
                        />
                </Form.Group>
            </Col>
        </Row>            
        <Row>
            <Col>
                <h5>cơ sở khám</h5>
                <Form.Group >
                <div type = 'selectbox'name='coso' className ='selected-box' size='lg'> 
                        <select>
                            {arrHospital && arrHospital.map((item)=>(
                            <option key =  {item._id} value = {item._id}>{item.hospitalnames}</option>
                            ))}
                        </select>              
                    </div>
                </Form.Group>
            </Col>
            <Col>
                <h5>Bác sĩ</h5>
                <Form.Group>
                    <div type = 'selectbox'name='bacsi' className ='selected-box' size='lg'> 
                        <select>
                            {arrDoctor && arrDoctor.map((item)=>(
                            <option key =  {item._id} value = {item._id}>{item.doctorName}</option>
                            ))}
                        </select>              
                    </div>
                </Form.Group>
                
            </Col>

            
        </Row>
        <Button className='btndangky' size='lg' variant='success' type='submit'>Đăng ký</Button>
    </Form>
</>
)}	
}


export default FormDangkykham
