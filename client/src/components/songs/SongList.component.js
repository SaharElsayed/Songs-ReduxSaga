import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchSongs } from '../../actions/index';

class SongList extends React.Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    renderAdmin = (song) => {
        return (
            <div className="right floated content">
                <Link to={`/songs/edit/${song.id}`} className="ui button primary">Edit</Link>
                <Link to={`/songs/delete/${song.id}`} className="ui button negative">Delete</Link>
            </div>
        )
    }

    renderList = () => {
        return (
            this.props.songs.map(song => {
                return (
                    <div className="item" key={song.id}>
                        {this.renderAdmin(song)}
                        <i className="large middle aligned icon music" />
                        <div className="content">
                            <Link className="header" to={`/songs/${song.id}`}>{song.title}</Link>
                            <div className="description">{song.description}</div>
                        </div>
                    </div>
                )
            })
        )
    }

    renderCreate = () => {
        return (
            <div>
                <Link to="/songs/new" className="ui button primary right floated column">Create Song</Link>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui grid">
                    <div className="four column row">
                        <h2 className="left floated column">Songs</h2>
                        {this.renderCreate()}
                    </div>
                </div>

                <div className="ui celled list">{this.renderList()}</div>
            </React.Fragment>
        )
    }
}


const mapStateToprops = state => {
    return { songs: Object.values(state.songs) }
}

export default connect(mapStateToprops, { fetchSongs })(SongList);