import { Link } from 'react-router-dom'
import './index.css'

function Underbar() {

    return (
        <>
            <div className='wrap'>
                <img src="img/calculator_active.png" />
                <Link to='/result'>
                    <img src="img/result_inactive.png" />
                </Link>
            </div>

        </>
    )
}

export default Underbar;