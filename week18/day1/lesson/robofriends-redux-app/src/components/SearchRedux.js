import {connect} from 'react-redux';
import {search} from '../redux/actions'

const SearchRedux = (props) => {
    return(
        <div>
            <input type='text' onChange={(e) => props.dispatch(search(e.target.value))}/>
        </div>
    )
}

export default connect()(SearchRedux)