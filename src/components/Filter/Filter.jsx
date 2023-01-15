import PropTypes from 'prop-types';
import {
  FilterTitle, 
  Filterinput, 
} from './Filter.styled';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement} from '../../redux/store'


const Filter = ({value, onFilter}) => {
    const dispatch = useDispatch();
    const valueRedux = useSelector(state => state.myValue);
    console.log(valueRedux);
    return (       
        <label>
            <FilterTitle>Filter</FilterTitle>  
            <Filterinput
                type="text"
                name="filter" 
                value={value}
                onChange={onFilter}
                placeholder="Enter request"
            ></Filterinput>
            <div>
                <nav>
                    {valueRedux}
                    <button onClick={() => dispatch(increment(100))}>Increment</button>
                    <button onClick={() => dispatch(decrement(50))}>Decrement</button>
                </nav>
            </div>
        </label>     
    )    
 }

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}
