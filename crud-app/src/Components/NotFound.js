
import notfound from '../Assets/Images/NotFound.jpg'

const NotFound =() => {         //for invalid routing or incorrect urls
    return(
        <img src={notfound} style={{width:'30%', margin: '80px 0 0 35%'}}/>
    )
}

export default NotFound;