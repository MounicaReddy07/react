
import {Box, makeStyles,Typography} from '@material-ui/core'
import Youtube from '../Assets/Images/youtube.png'
import InstaTele from '../Assets/Images/InstaTele.png'

const useStyles = makeStyles({
    image: {
        width: '90%',
        height: '90%'
    },
    component : {
        margin : 50
    }
})

const CodeForCrud = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant= "h4" style={{marginBottom: 50}}>Code For Crud App</Typography>
            <Box style={{display: 'flex'}}>
                <img className={classes.image} src={Youtube} />
                <img className={classes.image} src={InstaTele} />
            </Box>
        </Box>
    )
}
export default CodeForCrud;