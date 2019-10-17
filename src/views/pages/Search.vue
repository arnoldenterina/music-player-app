<template>
    <div>
        <v-layout row wrap>
            <v-flex lg12>
                <v-card color="grey darken-3">
                    <v-card-title class="vCard-title">
                        <v-icon large left > fas fa-search</v-icon>
                        <span class="title font-weight-light">Search results for "{{qs}}"</span>
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-card-actions>
                        <v-layout row wrap>
                            <v-flex lg3 xs12 sm6 md4 v-for="(row, idx) in items" :key="idx">
                                <v-card light class="dark--text">
                                    <v-img class="imgVideo" height="150px" :src="parseImage(row.encrypted_id)">
                                        <v-container fill-height fluid pa-2>
                                            <v-layout fill-height>
                                                <v-flex xs12 align-end flexbox>
                                                    <span class=" white--text position-time">{{row.duration}}</span>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                        <div class="card-mask ">
                                            <a class="card-mask-bf" @click="addToPlaylist(row)">
                                                <span></span>
                                            </a>
                                        </div>
                                    </v-img>
                                    <v-card-title class="cardTitle-padding">
                                        <h5>{{row.title}}</h5>
                                        <span class="grey--text">{{row.author}}</span>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-layout row wrap>
                            <v-flex md12>
                                <v-btn
                                    :loading="isloading"
                                    rounded
                                    dark
                                    color="deep-purple"
                                    class="white--text"
                                    @click="loadMore"
                                >
                                Load more
                                <v-icon right dark>mdi-more</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                isloading: false,
                search: '',
                page: 1
            }
        },
        props: ['qs'],
        watch:{
            qs: {
                immediate: true,
                handler (val, oldVal){
                    this.startSearch(val)
                }
            }
        },
        methods: {
            loadMore() {
                this.page += 1
                this.ytSearch(this.search, this.page)
            },
            startSearch(val, page = 1){
                this.items = []
                this.search = val
                this.ytSearch(this.search, page)
            },
            ytSearch(search, page){
                this.isloading = true
                Axios.get('http://127.0.0.1/yt.php?q='+this.search+'&p='+page).then(({data}) =>{
                    console.log(data)
                    this.items = this.items.concat(data.video)
                    this.isloading = false
                }).catch(e => {
                    this.isloading = false
                    this.$toasted.show("Something went wrong (-_-)", { 
                        theme: "toasted-primary",
                        type: "error",
                        position: "top-right", 
                        duration : 2000,
                        icon: 'bug_report'
                    });
                })
            },
            parseImage(id){
                return "https://i.ytimg.com/vi/"+id+"/sddefault.jpg";
            },
            addToPlaylist(row){
                console.log(row)
            }
        }
    }
</script>

<style scoped>
    .vCard-title{
        border-left-style: solid;
        border-width: 15px;
        border-color: mediumpurple;;
    }
    .cardTitle-padding{
        padding-bottom: 0px;
        display: block;
    }
    .cardTitle-padding h5{
        line-height: 1.2em;
        text-align: justify;
        font-size: 0.7em;
    }
    .cardTitle-padding span{
        font-size: 0.7em;
    }
    .position-time{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1px 3px;
        background-color: #00000073;
    }
    .headline {
        font-size: 16px!important;
    }

    .card-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
        display: none;
    }
    .card-mask a {
        display: block;
        text-align: center;
        height: 50%;
    }
    .card-mask-bf span {
        margin: 20% 0 5%;
        display: inline-block;
        width: 20%;
        height: 100%;
        background: url('~@/assets/bf-hui.png') no-repeat;
        background-size: 100% auto;
    }
    .card-mask-bf:hover span {
        background: url('~@/assets/bf-yellow.png') no-repeat;
        background-size: 100% auto;
    }
    .imgVideo:hover .card-mask {display:block;}
</style>