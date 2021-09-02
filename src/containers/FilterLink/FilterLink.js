import { connect } from "react-redux";
import { setVisibilityFilter } from "../../store/actions/actions";
import Link from "../../components/Link/link";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);