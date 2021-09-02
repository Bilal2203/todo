import FilterLink from '../../containers/FilterLink/FilterLink'
import { VisibilityFilters } from '../../store/actions/actions'
const Footer = () => (
    <div className='div1'>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} >Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >Completed</FilterLink>
    </div>
)
export default Footer;