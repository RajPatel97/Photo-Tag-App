import findimage from './assets/MortalKombat.jpeg'


const Image = () => {

    const handleClick=(event)=>{
        console.log(event);
        console.log(" X:"+event.pageX +" Y:"+event.pageY);
    }

    return ( 
        <div className="image-wrapper">
        <img src={findimage} alt="Find Them All!" onClick={handleClick}/>
        </div>
     );
}
 
export default Image;
