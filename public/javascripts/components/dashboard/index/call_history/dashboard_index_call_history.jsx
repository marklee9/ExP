import React from 'react';
import CallHistoryItem from './dashboard_index_call_history_item';

class DashboardIndexCallHistory extends React.Component {

  constructor(props) {
    super(props)
    this.displayTasks = this.displayTasks.bind(this);
  }

  displayTasks() {
    let tasks = this.props.tasks;
    if (tasks.length > 0) {
      return tasks.map((task) => <CallHistoryItem task={task} triggerManager={this.props.triggerManager} key={task._id} /> )
    } else {
      return <p>You have not recorded a call yet!</p>
    }
  }

  render() {
    return (
      <div className="dashboard-index-call-history-container">
        <h1>Your Calls:</h1>
        {/* <div className="list-container"> */}
          <ul className="dashboard-index-call-history-list">
            {this.displayTasks()}
          </ul>
        {/* </div> */}
      </div>
    )
  }
};

export default DashboardIndexCallHistory;