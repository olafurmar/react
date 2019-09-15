import {combineReducers} from 'redux';
const songsReducer = () => {
  return [
    {title:'wings', artist:'macklemore', duration:'2.30'},
    { title: 'i want it that way', artist: 'backstreet boys', duration: '2.40' },
    { title: 'cinderella man', artist: 'eminem', duration: '2.50' },
    { title: 'þar sem hjartad slær', artist: 'svessi', duration: '2.60' }
  ];
};

const selectedSongReducer= (selectedSong = null, action) =>{
  if(action.type ==='SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});