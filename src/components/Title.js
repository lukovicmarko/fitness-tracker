import React from 'react';
import { Link } from 'react-router-dom';

function Title({ className, title, subtitle, visibility }) {
    return (
        <div className={className}>
            {
                visibility === "hidden"
                    ? null :
                    <Link to="/">
                        <i className="material-icons left">
                            chevron_left
                        </i>
                    </Link>
            }
            <div>
                <h1>
                    {title}
                </h1>
                <h4>
                    {subtitle}
                </h4>
            </div>
        </div>
    )
}

Title.defaultProps = {
    className: "title",
    title: "Welcome!",
    subtitle: "Overview of your activity"
}

export default Title;