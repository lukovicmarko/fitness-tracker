import React from 'react';

function Card({ icon, title, subtitle, total }) {
    return (
        <div className="card">
            <div className="icon">
                <i className="material-icons">
                    {icon}
                </i>
            </div>

            <div className="card-information" style={{ display: total.averageMinutes ? "block" : "flex" }}>
                <div className="card-title">
                    <h3>
                        {title}
                    </h3>
                    <h4>
                        {subtitle}
                    </h4>
                </div>

                {total.averageMinutes ? <h1 className="averageTime">{total.averageHour}h {total.averageMinutes}min</h1> : <h1 className="total">{total.toLocaleString()}</h1>}

            </div>
        </div>
    )
}

export default Card;
