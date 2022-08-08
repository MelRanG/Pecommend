import './topbutton.css'

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
            <button className="glyphicon glyphicon-triangle-top" onClick={topB}></button>
        </div>
    )
}

export default Topbutton;