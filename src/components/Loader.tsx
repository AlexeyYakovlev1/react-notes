import React from 'react';
import load from '../assets/images/load.gif';

const Load: React.FC = () => {
    const [loading, setLoading] = React.useState(true);

    document.addEventListener('DOMContentLoaded', () => {
        setLoading(false);
        document.body.style.overflow = 'visible';
    })

    return (
        <div className={!loading ? "load block-hidden" : "load"}>
            <div className="load__content">
                <img src={load} alt="loader" />
            </div>
        </div>
    )
}

export default Load;