import React, { Component } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import ProjectForm from './ProjectForm';

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { id } = this.props.match.params;

    return axiosWithAuth()
      .get(`api/v1/projects/${id}`)
      .then(res => {
        this.setState({
          project: res.data[0]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.project) {
      return <ProjectForm isEditing={true} project={this.state.project} />;
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default EditProject;
