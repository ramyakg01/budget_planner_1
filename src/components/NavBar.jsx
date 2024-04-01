import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddchartIcon from '@mui/icons-material/Addchart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssistantIcon from '@mui/icons-material/Assistant';
import {Link} from 'react-router-dom';



const NavBar = () =>{
    return(
        <div  className='d-flex flex-column'style={{gap : "40px", backgroundColor : "#efefef", width : "60px", height :"100vh"}}>
            <div style={{fontSize : "xx-large"}} className='mx-auto'>
                <AccountBalanceIcon style={{color:"black", cursor:"pointer"}} fontSize='xx-large' ></AccountBalanceIcon>
            </div>
            <div className='pt-3 d-flex flex-column mx-auto' style={{fontSize : "xx-large", gap : "50px"}}>
                 <Link to="/"><HomeIcon  fontSize='xx-large'></HomeIcon></Link>
                 <Link to="/AddExpenses"><AddchartIcon  fontSize='xx-large'></AddchartIcon> </Link>
                 <Link to="/Chart"><AccountBalanceWalletIcon  fontSize='xx-large'></AccountBalanceWalletIcon></Link>
                 <Link to="/Assistant"><AssistantIcon   fontSize='xx-large'></AssistantIcon></Link>
                 <Link to="/Settings"><SettingsIcon  fontSize='xx-large'></SettingsIcon></Link>
            </div>
        </div>
    )
}
export default NavBar;