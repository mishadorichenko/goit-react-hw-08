import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeTextFilter } from '../../redux/filters/slice';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeTextFilter(filter));

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      />
    </div>
  );
}
export default SearchBox;
