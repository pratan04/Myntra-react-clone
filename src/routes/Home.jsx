import { useSelector } from "react-redux"
import Homeitem from "../components/Homeitem"

const Home=()=>{

    const items =useSelector(store=>store.items)
    console.log(items)





    // const item={

    //     id: '002',
    //     image: 'images/1.jpg',
    //     company: 'CUKOO',
    //     item_name: 'Women Padded Halter Neck Swimming Dress',
    //     original_price: 2599,
    //     current_price: 1507,
    //     discount_percentage: 42,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.3,
    //         count: 24,
    //     }
    //   }


    return <>
    <main>
        <div className="items-container">
    {items.map(item=>(<Homeitem key={item.id} item={item}/>))}
        
        </div>
    </main>
    </>
}
export default Home