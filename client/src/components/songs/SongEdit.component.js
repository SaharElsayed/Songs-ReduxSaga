import React from 'react';
import { connect } from "react-redux";
import { fetchSong, editSong } from '../../actions/index';
import SongForm from './SongForm.component';

class SongEdit extends React.Component {

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editSong(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.song) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a song</h3>
                <SongForm
                    initialValues={{ title: this.props.song.title, description: this.props.song.description }}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return { song: state.songs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSong, editSong })(SongEdit);