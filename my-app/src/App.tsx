import { useEffect, useState } from 'react'
import { getLaunches } from './SpaceX';
import "./index.css"
import Navbar from './Navbar';
function App() {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const [launches, setLaunches] = useState<any[]>([]);
 
    useEffect(() => {
        async function fetchData() {
            const data = await getLaunches();
            setLaunches(data.reverse());
            console.log(data)
        }
        fetchData();
    }, [])
    
    return (
   <div>
    <div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen relative " style={{backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/spaceximage.jpg")' }}>
        {/* 'url("/spaceximage.jpg")', */}
        
       <Navbar/>
        <div className="flex justify-end ">
        <div className="w-1/2 p-4"> {/* Create a container for the image */}
        <img
        src="./public/spaceximage.jpg" /* Replace with your image source */
         alt="Left Image"
        className="max-w-full h-auto"
        style={{ width: '100%' }} 
        />
    </div>
            <div className='w-1/2 p-4'>
            <div className="flex flex-wrap -mx-2">

            
          
        <ul className=''>
            {launches.slice(0,10).map((launch) => (

                
                <div key={launch.id + 2} className="bg-zinc-600 mb-5 rounded-lg shadow-md p-4 mr-2 ml-2 max-w-xl"> 
                <li className='
                list-none
                 text-red-500
                 ' 
                key={launch.id + 1}>
                {launch.name}
                </li>
                <p key={launch.id}>Date: {launch.date_utc}</p>
                <p key={launch.id + 3}>Success: {launch.success ? "Yes" : "No"}</p>
                <p key={launch.id + 4}>Details: {launch.details ? launch.details : "Unavailable"}</p>
                </div> ))}
               
        </ul>
            </div> 
         </div>
        </div>
    </div>
    dasd
    </div>
  
 )
}

export default App
