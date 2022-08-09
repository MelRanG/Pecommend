import './topbutton.css'
import { BsChevronDoubleUp } from 'react-icons/bs'

function Topbutton() {
    const topB = () => {
        // document.querySelector('body').scrollTo(0,0)
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }
    return (
        <div className="topbutton">
            <button onClick={topB}><BsChevronDoubleUp /></button>
            {/* <button className="glyphicon glyphicon-triangle-top" onClick={topB}></button> */}
        </div>
    )
}

export default Topbutton;