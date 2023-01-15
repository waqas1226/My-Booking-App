import { createContext, useReducer } from "react"

const INIT_STATE={
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}

export const SearchContext = createContext(INIT_STATE)

const searchReducer = (state, action)=>{
    switch(action.type){
        case 'New Search':
            return action.payload

        case "reset search":
            return INIT_STATE

        default:
        return state
    }
}

export const SearchContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(searchReducer, INIT_STATE)
    return(
        <SearchContext.Provider value={{city:state.city, dates:state.dates, options:state.options, dispatch }}>
        {children}
        </SearchContext.Provider>
    )
}