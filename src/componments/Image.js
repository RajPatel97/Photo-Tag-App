import findimage from './assets/MortalKombat.jpeg'

const Image = () => {
    return ( 
        <div className="image-wrapper">
        <img src={findimage} alt="Find Them All!" />
        </div>
     );
}
 
export default Image;