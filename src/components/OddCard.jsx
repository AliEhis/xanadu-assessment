const OddCard = ({ odds, amount, currency }) => {
    
    return (
        <div className="odd-display">
            <div className="odd-display-item-top">
                <h3 className="odd-display-item-title">{odds}</h3>
            </div>
            <div className="odd-display-item-bottom">
                <p className="odd-display-item-title">{`${currency} ${amount && parseInt(amount)}`}</p>
            </div>
        </div>
    )
}

export default OddCard
