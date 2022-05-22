import OddCard from "./OddCard";

const EventCard = ({ market }) => {
    return (
        <div className="event-card">
            <div className="event-card-header">
                <h4>{market.name}</h4>
            </div>
            <div className="event-card-body">
                {
                    market && market.runners && market.runners.map((runner, index) => {
                        return (
                            <div className="event-card-item" key={index}>
                                <div className="event-card-item-left">
                                    <h3>{ runner && runner.name }</h3>
                                </div>
                                <div className="event-card-item-right">
                                    {
                                        runner && runner.prices && runner.prices.map((price, j) => {
                                            return (
                                                <OddCard key={j} odds={price && price.odds} amount={price && price['available-amount']} currency={price && price.currency} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventCard
