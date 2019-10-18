<template>
    <div>
        <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing" @ended="ended" ref="youtube" style="width: 100%;"></youtube>

        <div class="text-center" style="background: grey; padding: 10px;">
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Previous" @click="prevTrack">
                <v-icon dark>mdi-skip-previous-circle-outline</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Shuffle" @click="isShuffle=!isShuffle">
                <v-icon dark v-if="isShuffle">mdi-shuffle-variant</v-icon>
            <v-icon dark v-else>mdi-shuffle-disabled</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Repeat" @click="isRepeat=!isRepeat">
                <v-icon dark v-if="isRepeat">mdi-repeat</v-icon>
                <v-icon dark v-else>mdi-repeat-off</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Next" @click="nextTrack">
                <v-icon dark>mdi-skip-next-circle-outline</v-icon>
            </v-btn>
        </div>

        <div class="gfg">
            <v-list-item two-line v-for="(row, idx) in playlist" :key="idx">
                <v-list-item-content>
                    <v-list-item-title>{{row.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{row.author}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track" @click="playThisTrack(idx)">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track" @click="removeTrack(idx)">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                videoId: '',
                playerVars: {
                    autoplay: 1
                },
                isShuffle: false,
                isRepeat: false,
                cur_id: 0,
                tmpVidID: true
            }
        },
        computed: {
            playlist () {
                if(this.$store.state.playList.length == 1 && this.tmpVidID){
                    this.videoId = this.$store.state.playList[0].encrypted_id
                    this.tmpVidID = false
                }
                return this.$store.state.playList
            }
        },
        mounted(){
            if(this.playlist.length > 0 && this.tmpVidID){
                this.videoId = this.playlist[0].encrypted_id
                this.tmpVidID = false
            }
        },
        methods: {
            playing() {
                // console.log('\o/ we are watching!!!')
            },
            ended(){
                this.nextTrack()
            },
            playThisTrack(idx){
                // this.$store.dispatch('playThisTracklist', idx)
                this.cur_id = idx
                this.videoId = this.playlist[idx].encrypted_id
                this.playerVars.autoplay = 1
                this.$refs.youtube.player.playVideo()
            },
            prevTrack(){
                if(this.playlist.length == 0){
                    this.$toasted.show("End of playlist", { 
                        theme: "outline",
                        type: "warning",
                        position: "bottom-left", 
                        duration : 2000,
                        icon: 'bug_report'
                    });
                    return;
                }
                if(this.cur_id == 0 && this.playlist.length != 0){
                    if(this.isRepeat){
                        if(this.isShuffle){
                            this.cur_id = this.getRandomIndex()
                        }else{
                            this.cur_id = (this.playlist.length - 1)
                        }
                    }else{
                        this.$toasted.show("End of playlist", { 
                            theme: "outline",
                            type: "warning",
                            position: "bottom-left", 
                            duration : 2000,
                            icon: 'bug_report'
                        });
                        return;
                    }
                }else{
                    if(this.isShuffle){
                        this.cur_id = this.getRandomIndex()
                    }else{
                        this.cur_id = Math.max(0, this.cur_id - 1);
                    }
                }
                this.videoId = this.playlist[this.cur_id].encrypted_id
                this.playerVars.autoplay = 1
                this.$refs.youtube.player.playVideo()
            },
            nextTrack(){
                if(this.playlist.length == 0){
                    this.$toasted.show("End of playlist", { 
                        theme: "outline",
                        type: "warning",
                        position: "bottom-left", 
                        duration : 2000,
                        icon: 'bug_report'
                    });
                    return;
                }

                if((this.cur_id + 1) >= this.playlist.length){
                    if(this.isRepeat){
                        if(this.isShuffle){
                            this.cur_id = this.getRandomIndex()
                        }else{
                            this.cur_id = 0
                        }
                        this.videoId = this.playlist[this.cur_id].encrypted_id
                        this.playerVars.autoplay = 1
                        this.$refs.youtube.player.playVideo()
                    }else{
                        this.$toasted.show("End of playlist", { 
                            theme: "outline",
                            type: "warning",
                            position: "bottom-left", 
                            duration : 2000,
                            icon: 'bug_report'
                        });
                    }
                }else{
                    if(this.isShuffle){
                        this.cur_id = this.getRandomIndex()
                    }else{
                        this.cur_id += 1
                    }
                    this.videoId = this.playlist[this.cur_id].encrypted_id
                    this.playerVars.autoplay = 1
                    this.$refs.youtube.player.playVideo()
                }
            },
            removeTrack(idx){
                this.$store.dispatch('removeThisTrack', idx)
            },
            getRandomIndex(){
                var c = true;
                while(c){
                    var r = Math.floor(Math.random()*this.playlist.length)
                    if(this.cur_id != r){
                        c = false;
                        break;
                    }
                }
                return r;
            }
        }
    }
</script>

<style scoped>

</style>