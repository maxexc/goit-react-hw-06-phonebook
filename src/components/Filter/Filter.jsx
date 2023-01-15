import PropTypes from 'prop-types';
import {
  FilterTitle, 
  Filterinput, 
} from './Filter.styled';
import {useSelector, useDispatch} from 'react-redux';

const Filter = ({value, onFilter}) => {
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
                <nav>{valueRedux}</nav>
            </div>
        </label>     
    )    
 }

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}
