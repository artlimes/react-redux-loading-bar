import { connect } from 'react-redux-meteor'
import { LoadingBar } from './loading_bar'

const mapImmutableStateToProps = state => ({
  loading: state.get('loadingBar'),
})

export default connect(null, mapImmutableStateToProps)(LoadingBar)
