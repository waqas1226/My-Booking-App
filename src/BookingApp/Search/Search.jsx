import React, { useState } from 'react';
// import SearchBar from './SearchBar';
import './Search.css';
import SearchItems from './SearchItems';
import TopNav from '../TopNav';
import './SearchBar.css';
import { Link, useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import useFetch from '../Hooks/useFetch';

function Search(props) {
    const location = useLocation();
    // const [destination, setDestination] = useState('lahore')
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(500);


    const h = (e) => {
        const ops = { ...options }
        ops.Adult = e.target.value;
        setOptions(ops);
    }
    const openDateRange = () => {
        open ? setOpen(false) : setOpen(true)
    }
    let {data, refetch} = useFetch(`http://localhost:5000/hotel?city=${destination || ""}&limit=4&min=${min || 0}&max=${max || 999}`);
    
    console.log(location, 'rendered');
    const FetchData = () => {
        refetch();
        console.log('k')
    }
    return (
        <div>
            <TopNav/>
            <div className="SearchingPortion">
            <div className='SrContainer'>
            <div className="SrWrapper">
                <h3 className="Heading">Search</h3>

                <div className="SrInputs">

                    <div className="dest df al fdc">Destination
                        <input type="text" className="destInput" placeholder={destination ? destination : 'city'} value={destination} onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="dateRange df al fdc">Check in dates
                        <span onClick={openDateRange} className="datespan bgw">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                        {open && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
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
                <button className='SearchBt' onClick={FetchData}>Search</button>
            </div>

        </div>
         <SearchItems data={data}/>
          </div>
        </div>
    );
}

export default Search;