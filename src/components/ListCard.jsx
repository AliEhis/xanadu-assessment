import { Link, useNavigate } from "react-router-dom";
import { convertDateTimetoHuman } from "../functions";
import OddCard from "./OddCard";

const ListCard = ({ event, category }) => {
    const navigate = useNavigate();
    
    const handleSingleEvent = (e) => {
        e.preventDefault();
        navigate(`/event/${category.toLowerCase()}/${event.name.toLowerCase()}/${event.id}`);
    }
    
    return (
        <div className="list-card container">
            <Link className="link" to={`/`} onClick={(e) => handleSingleEvent(e)}>
                <div className="left">
                    <p>{ event && event.start && convertDateTimetoHuman(event.start) }</p>
                    <h3 className="title">{ event && event.name }</h3>
                </div>
                <div className="right">
                    {
                        event && event.markets && event.markets[0] && event.markets[0].runners.slice(0, 2).map((runner, index) => {
                            return (
                                <OddCard 
                                    key={index}
                                    odds={runner && runner.prices && runner.prices.length > 0 && runner.prices[0].odds} 
                                    amount={runner && runner.prices && runner.prices.length > 0 && runner.prices[0]['available-amount']} 
                                    currency={runner && runner.prices && runner.prices.length > 0 && runner.prices[0]['currency']}
                                />
                            )
                        })
                    }
                </div>
            </Link>
        </div>
    )
}

export default ListCard
