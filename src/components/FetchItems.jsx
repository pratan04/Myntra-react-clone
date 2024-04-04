import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStatusActions } from "../store/fetchStatusSlice"
import { itemsActions } from "../store/itemSlice"



const FetchItems=()=>{

    const fetchStatus=useSelector((store)=>store.fetchStatus)

    const dispatch=useDispatch()
    console.log(fetchStatus)


    useEffect(()=>{
        if(fetchStatus.fetchDone) return

         const controller= new AbortController()

        const signal=controller.signal

        // dispatch(fetchStatusActions.markFetchingStarted())


        fetch("http://localhost:8080/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{


        //    dispatch(fetchStatusActions.markFetchDone())
        //     dispatch(fetchActions.markFetchingEnded())
            dispatch(itemsActions.addInitialItems(items[0]))
            
        })

        return () => {
            controller.abort()
        }

    },[fetchStatus])

    return <>
   {/* <div>
    Fetch Done:{fetchStatus.fetchDone}
    Currently Fetching: {fetchStatus.currentlyFetching}
   </div> */}
    </>
}
export default FetchItems