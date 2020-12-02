import './Toolbar.css';

export default function Toolbar(props) {
  return (
    <ul className='toolbar'>
      {props.filters.map((filter, index) => (
        <li className={filter === props.selected ? 'toolbar_filter toolbar_filter__selected' : 'toolbar_filter'}
          key={index}
          onClick={props.onSelectFilter}
        >{filter}</li>
      ))}
    </ul>
  )
}