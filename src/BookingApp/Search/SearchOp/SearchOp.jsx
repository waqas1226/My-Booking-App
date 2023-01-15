import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangeOutlined, Person } from '@mui/icons-material';
import { format } from 'date-fns';
import '../SearchOp/SearchOp.css';
import { SearchContext } from '../../Context/SearchContext';



function SearchOp(props) {
let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState(
    {
      Adult: 1,
      Children: 0,
      room: 1
    }
  );
const {dispatch} = useContext(SearchContext)
  const handleSearch = () => {
    dispatch({type:'New Search', payload:{destination, dates, options}})
   navigate('/Search', {state:{destination, dates, options}})
  console.log('ss')
  }
  const openDateRange = () => {
    open?setOpen(false):setOpen(true)
  }
  const openOps = () => {
    setOpenOptions(true)
    // openOptions?setOpenOptions(false):setOpenOptions(true)
  }
  return (

    <div className="Bsearch br">
      <input type='text' className="wording" placeholder="where are you going" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
      <div className="dateRange">
        <DateRangeOutlined />
        <span onClick={openDateRange} className="datespan">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
        {open && <DateRange
          editableDateInputs={true}
          onChange={item => setDates([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          className='dateRangeComp'
        />}
      </div>
      <div onClick={openOps} className="members cp">
        <Person />
        {`Adult: ${options.Adult}  Children: ${options.Children} room: ${options.room}`}
        {openOptions&&<div className="optionsdiv br">
          <div className='opt'>
            <span>Adult</span>
            <div className='btcount'>
              <button onClick={() => setOptions({ ...options, Adult: options.Adult - 1 })}>-</button>
              <span>{options.Adult}</span>
              <button onClick={() => setOptions({ ...options,Adult: options.Adult + 1 })}>+</button>
            </div>
          </div>
          <div className='opt'>
            <span>Children</span>
            <div className='btcount'>
              <button onClick={() => setOptions({...options, Children: options.Children - 1 })}>-</button>
              <span>{options.Children}</span>
              <button onClick={() => setOptions({ ...options,Children: options.Children + 1 })}>+</button>
            </div>
          </div>

          <div className='opt'>
            <span>Room:</span>
            <div className='btcount'>
              <button onClick={() => setOptions({ ...options,room: options.room - 1 })}>-</button>
              <span>{options.room}</span>
              <button onClick={() => setOptions({ ...options,room: options.room + 1 })}>+</button>
            </div>
          </div>
        </div>}
      </div>
      <button className="register" onClick={handleSearch}>Search</button>
    </div>

  );
}

export default SearchOp;