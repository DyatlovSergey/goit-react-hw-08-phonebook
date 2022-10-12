import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/phonebook/selectors";
import { filterChangeAction } from "../../redux/phonebook/actions";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = (event) =>
    dispatch(filterChangeAction(event.target.value));

  return (
    <div className={s.filter}>
      <h2 className={s.filter__head}>Find contact</h2>
      <label className={s.filter__label}>Enter name:</label>
      <input
        className={s.filter__input}
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
