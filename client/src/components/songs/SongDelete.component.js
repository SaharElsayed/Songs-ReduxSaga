import React from 'react';
import Modal from '../Modal.component';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchSong, deleteSong } from '../../actions/index';


class SongDelete extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteSong(id)}
                    className="ui negative button"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.song) {
            return "Are you sure you want to delete this song?"
        }

        return `Are you sure you want to delete the song with title: ${this.props.song.title}`
    }

    render() {
        return (
            <Modal
                title="Delete Song"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return { song: state.songs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSong, deleteSong })(SongDelete);