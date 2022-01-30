export const diseaseReducer = (state, action) =>{
    const {type, payload} = action
    switch(type){
        case 'DISEASES_lOADED_sUCCESS':
            return {
                ...state,
                diseases: payload,
                diseasesLoading: false
            }
        default: 
            return state
    }
}