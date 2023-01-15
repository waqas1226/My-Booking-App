import React, { useState } from 'react';
import './SearchBar.css';
import { Link, useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

function SearchBar() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);


    const h = (e) => {
        const ops = { ...options }
        ops.Adult = e.target.value;
        setOptions(ops);
    }
    const openDateRange = () => {
        open ? setOpen(false) : setOpen(true)
    }
    console.log(location);

    return (
        <div className='SrContainer'>
            <div className="SrWrapper">
                <h3 className="Heading">Search</h3>

                <div className="SrInputs">

                    <div className="dest df al fdc">Destination
                        <input type="text" className="destInput" placeholder={destination ? destination : 'city'} value={destination} onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="dateRange df al fdc">Check in dates
                        <span onClick={openDateRange} className="datespan bgw">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {open && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='dateRangeComp'
                        />}
                    </div>
                </div>

                <div className="options">
                    <h4 className="searchOpHead">Options</h4>

                    <div className="OpItem">Min Price
                        <input type="text" className="OptInput" value={min} onChange={(e) => setMin(e.target.value)} />
                    </div>
                    <div className="OpItem">Max Price
                        <input type="text" className="OptInput" value={max} onChange={(e) => setMax(e.target.value)} />
                    </div>
                    <div className="OpItem">Adult
                        <input type="text" className="OptInput" placeholder={options.Adult} value={options.Adult} onChange={h} />
                    </div>
                    <div className="OpItem">Room
                        <input type="text" className="OptInput" placeholder={options.room} />
                    </div>

                </div>
                <button className='SearchBt' >Search</button>
            </div>

        </div>
    );
}

export default SearchBar;