import { Outlet, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const Dashboard = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/Add">Add Expenses</Link>
                    </li>
                    <li>
                        <Link to="/Chart">Chart</Link>
                    </li>
                    <li>
                        <Link to="/Settings">Settings</Link>
                    </li>

                </ul>
         </nav>
         <Outlet/>
        </div>
    )
}
export default Dashboard;