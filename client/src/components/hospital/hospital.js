import React, { Component } from 'react'
import getHospitalAPI from '../../configAPI/HospitalAPI'
import {Link} from 'react-router-dom'


class Hospital extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arrHospital:[],
            arrDoctor:[]
		}
	}

	async componentDidMount(){
		let response = getHospitalAPI()
		if(response){
			this.setState({
				arrHospital: (await response).data
			})
			console.log('check state vaccines 1 ', this.state)
		}
		
	}


render(){
	let arrHospital = this.state.arrHospital
  return (
	<div className='hospital-container'>
		<div className='title text-center'>Danh sách vaccines</div>
		<div className='hospital-table mt-3 mx-1' >
    		<table id="hospital">
				<tr>
					<th>Tên bệnh viện</th>
					<th>địa chỉ</th>
					<th>số điện thoại</th>
				</tr>
				
					{ arrHospital && arrHospital.map((item, index)=>{
						return(
							<tr>
								<td width='300px'>
									<a href={item.link}>
                                        <div>
										    {item.hospitalnames}
									    </div>
                                    </a>
								</td>
								<td className='description'>
                                    {item.address}, 
                                    {item.ward}, 
                                    {item.district}, 
                                    {item.city}</td>
								<td width='200px'>{item.phone}</td>
							</tr>
							
							

						)
						
					})

					}
					
				
			</table>
		</div>
	</div> 
  )}	
}

export default Hospital