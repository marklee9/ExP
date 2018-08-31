import {fetchSpeechToken} from '../../../actions/auth_actions';
import {createTask} from '../../../actions/task_actions';
import {connect} from 'react-redux';
import SpeechRecord from './speech_record';

const mapStateToProps = state => ({
  // speechToken: state.entities.speechToken
})


const mapDispatchToProps = dispatch => ({
  fetchSpeechToken: () => dispatch(fetchSpeechToken()),
  createTask: (task) => dispatch(createTask(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechRecord);