import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/index';

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id);

    }
    render() {
        if (!this.props.song) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.song;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSong })(SongShow);