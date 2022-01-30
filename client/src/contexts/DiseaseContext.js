import {createContext, useReducer} from 'react'
import { diseaseReducer } from '../reducers/diseaseReducer'
import { apiUrl } from './constants'
import axios from 'axios'


export const DiseaseContext = createContext()


const DiseaseContextProvider = ({children}) => {

    //state 
    const [diseaseState, dispatch] = useReducer(diseaseReducer, {
        diseases: [],
        diseasesLoading: true
    })


    //get all disease
    const getDiseases = async() =>{
        try {
            const response = await axios.get(`${apiUrl}/diseases/getdiseases`)
            if( response.data.success){
                dispatch({type: 'DISEASES_LOADED_SUCCESS', payload: response.data.diseases})
            }
        } catch (error) {
            return error.response.data ? error.response.data : {success: false, message: ' lỗi server'}
        }
    }

    //disease context data 
    
    const diseaseContextData = {diseaseState, getDiseases } 

    return  (
        <DiseaseContext.Provider value={diseaseContextData}>
            {children}
        </DiseaseContext.Provider>
    )
}

export default DiseaseContextProvider