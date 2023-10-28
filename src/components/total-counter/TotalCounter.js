import '../total-counter/TotalCounter.css'

function TotalCounter({count}){

    return <>
        <section className="total-counter">
            Total : <span className="total-count">{count ||0}</span>
        </section>
    </>
}
export default TotalCounter;