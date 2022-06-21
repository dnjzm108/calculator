import { Link } from 'react-router-dom'
import './index.css'

function Underbar() {

    return (
        <>
            <div className='wrap'>
                <Link to='/'>
                    <img src="img/calculator_inactive.png" />
                </Link>
                <img src="img/result_active.png" />
            </div>

        </>
    )
}

export default Underbar;