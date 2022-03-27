import React, { Component } from 'react'
import getDoctorAPI from '../../configAPI/DoctorAPI'
import {Link} from 'react-router-dom'


class Doctor extends Component {
	constructor(props) {
		super(props)
		this.state = {
            arrDoctor:[]
		}
	}

	async componentDidMount(){
		let responseDoctor = getDoctorAPI()
		if(responseDoctor){
			this.setState({
				arrDoctor: (await responseDoctor).data
			})
			console.log('check state vaccines 1 ', this.state)
		}
		
	}


render(){
	let arrDoctor = this.state.arrDoctor
  return (
	<div className='hospital-container'>
		<div className='title text-center'>Danh sách Bác sĩ</div>
		<div className='hospital-table mt-3 mx-1' >
    		<table id="hospital">
				<tr>
					<th>Tên bác sĩ</th>
					<th>số điện thoại</th>
					<th>phóng khám</th>
					<th>bệnh viện</th>
				</tr>
				
					{ arrDoctor && arrDoctor.map((item, index)=>{
						return(
							<tr>
								<td className='description'>
                                    {item.doctorName} 
                                </td>
								<td width='200px'>{item.phone}</td>
                                <td>{item.clinic}</td>
                                <td>{item.hospital}</td>

							</tr>
							
							

						)
						
					})

					}
					
				
			</table>
		</div>
	</div> 
  )}	
}

export default Doctor