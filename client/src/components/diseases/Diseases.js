import React,{useContext} from 'react'
import {GlobalState} from '../../contexts/GlobalState'
import { AuthContext } from '../../contexts/AuthContext'
import DiseaseItem from '../../utils/singleDisease/DiseaseItem'
import Loading from '../../utils/loading/Loading'
import { DiseaseContext } from '../../contexts/DiseaseContext'



function Diseases() {
  //const state = useContext(DiseaseContext)
  const state = useContext(GlobalState)
  const authState = useContext(AuthContext)
  const [diseases] = state.diseasesAPI.diseases
  console.log(diseases)
  return (
    <>
      <div className='diseases'>
        {
          diseases.map(disease =>{
            return <DiseaseItem key={disease._id} disease={disease}/>
          })
        }
      </div>
      //{diseases.length === 0 && <Loading/>}
    </>
  )
}

export default Diseases