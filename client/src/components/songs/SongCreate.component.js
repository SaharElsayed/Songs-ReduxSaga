import React from "react";
import { connect } from 'react-redux';
import { songCreate } from '../../actions/index';

import SongForm from './SongForm.component';

class SongCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.songCreate(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a song</h3>
                <SongForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { songCreate })(SongCreate);