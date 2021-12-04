import ReasonsData from '../Data/ReasonsData'
const Reasons = () => {
    const ReasonTitleElements = ReasonsData.map(item=>{
        return <div>
                    <li className="mt-5 fs-5"><b>{item.title}</b></li> 
                    <p>{item.description}</p>
                </div>
    })
    return ( 
        <div>
           <img src={process.env.PUBLIC_URL + "/wave.svg"} alt="wave" className="wave"/>
           <div className="reasons-section pb-5">
                <h1 className="display-1 text-center p-5">Top Reasons to Adopt from an Animal Shelter</h1>
            <ol>
                 {ReasonTitleElements}
            </ol>
           </div>
        </div>
     );
}
 
export default Reasons;