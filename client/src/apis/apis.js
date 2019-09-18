import songs from './songs';

const fetchSongs = async () => await songs.get('/songs');
const fetchSong = async id => await songs.get(`/songs/${id}`);
const createSong = async data => await songs.post('/songs', data);
const editSong = async (id, data) => await songs.patch(`/songs/${id}`, data);
const deleteSong = async id => await songs.delete(`/songs/${id}`);

export default { fetchSongs, fetchSong, createSong, editSong, deleteSong };