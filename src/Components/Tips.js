import tipsData from "../Data/tipsData";
const Tips = () => {
    
   const tipsElements = tipsData.map(tip=>{
       return <li className="mb-2 fs-4">{tip}</li>
   }) 
    return ( 
        <section className="tips-section pt-5">
        <h1 className="display-1 text-center mt-5">Dog Health Tips</h1>
        <ol className="mt-5">
            {tipsElements}
        </ol>
        <em><a href="https://www.pawlicy.com/blog/dog-care-tips/">Click for more tips!</a></em>
        </section>
     );
}
 
export default Tips;