import { connect } from 'react-redux'
import { setFilter } from '../actions/actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter    //add background color when true
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
})

const Filter = connect(mapStateToProps, mapDispatchToProps)(Link)

export default Filter;