import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playList: [],
        isInCurrentTrack: false
    },
    mutations: {
        check_in_playlist(state, data){
            const found = state.playList.some(el => el.encrypted_id === data.encrypted_id);
            state.isInCurrentTrack = found
        },
        add_to_playlist (state, data){
            state.playList.push(data)
            if(state.playList.length == 1){
                // state.default_track_info = data
            }
        },
        remove_this_track(state, data){
            state.playList.splice(data, 1)
        }
    },
    actions: {
        checkIfExistinPlaylist({commit}, data){
            commit('check_in_playlist', data)
        },
        addToPlaylist({commit}, data){
            commit('add_to_playlist', data)
        },
        removeThisTrack({commit}, data){
            commit('remove_this_track', data)
        }
    },
    getters: {
        get_play_list: state => state.playList,
        getIfinTrack: state => state.isInCurrentTrack
    }
})
