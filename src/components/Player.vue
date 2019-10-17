<template>
    <div>
        <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing" style="width: 100%;"></youtube>

        <div class="text-center" style="background: grey; padding: 10px;">
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Previous">
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
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Next">
                <v-icon dark>mdi-skip-next-circle-outline</v-icon>
            </v-btn>
        </div>

        <div class="gfg">
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Mundo</v-list-item-title>
                    <v-list-item-subtitle>IV of Spades</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Mundo</v-list-item-title>
                    <v-list-item-subtitle>IV of Spades</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Mundo</v-list-item-title>
                    <v-list-item-subtitle>IV of Spades</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Mundo</v-list-item-title>
                    <v-list-item-subtitle>IV of Spades</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Mundo</v-list-item-title>
                    <v-list-item-subtitle>IV of Spades</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                    <v-btn icon ripple title="Play this track">
                        <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn icon ripple title="Remove track">
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
                videoId: 'xKk655CDFn8',
                playerVars: {
                    autoplay: 0
                },
                isShuffle: false,
                isRepeat: false
            }
        },
        methods: {
            playing() {
                console.log('\o/ we are watching!!!')
            }
        }
    }
</script>

<style scoped>

</style>