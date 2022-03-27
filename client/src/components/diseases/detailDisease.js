import React, { useContext, useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../contexts/GlobalState'


function DetailDisease() {
    const Params = useParams()
    console.log(Params)
    const state = useContext(GlobalState)
    const [diseases] = state.diseasesAPI.diseases
    const [detailDisease, setDetailDisease] = useState([])


    useEffect(()=>{
        if(Params) {
            diseases.forEach(disease =>{
                if(disease._id === Params.id) setDetailDisease(disease)
            })
        }
    }, [Params, diseases])

    if(detailDisease.length === 0 ) return null
    return (
        <div className='detail'>
            <div className='box-detail'>
                <h1>{detailDisease.diseaseName}</h1>
                <span>{detailDisease.category}</span>
                <p>{detailDisease.description}</p>
            </div>
        </div>
    )
}

export default DetailDisease