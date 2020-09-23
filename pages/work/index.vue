<style lang="scss" scoped>
  .card.active{
    opacity:1;
  }
  .card{
    transition:1s ease all;
    opacity:0;
  }
  .work__work{
    padding-top:rfs(5rem);
  }
  .nav__filters--home{
    display:flex;
    span:nth-child(1){
      margin-right:rfs(0.5rem);
    }
  }
  .nav__filters--panel{
    background:var(--color-two);
    color:white;
    display:flex;
    position: fixed;
    align-items: flex-start;
    flex-direction: column;
    margin:0px;
    z-index:100;
    width:100%;
    left:0px;
    height:0px;
    bottom:0px;
    transition:1s ease all;
    padding:rfs(1rem);
    overflow:hidden;
    li{
      margin-right:rfs(5rem);
    }
    a{
      @include noselect();
    }
  }
  .nav__filters--close{
    position: absolute;
    right:1rem;
    top:1rem;
  }
  .nav__filters--childpanel{
    position: absolute;
    top:50px;
    width:100%;
  }
  .nav__filters--childnav{
       display:flex;
       width:100%;
       height:100%;
       align-items: flex-start;
       flex-direction: row;
       flex-wrap:wrap;
       justify-content: space-between;
       li{
         width:40%;
         margin-right:rfs(1.5rem);
       }
    }
  .nav__filters--all{
    width:100%;
    display:flex;
    align-items: center;
    margin-right:0px!important;
    color:#7D7D7D;
  }
  .link-parent:not(.nav__filters--all){
      font-size:18px;
      color:white;
  }
  .nav__filters--all.active{
    color:#7D7D7D;
  }
  .nav__filters--label{
    color:#7D7D7D;
    position: relative;
  }
  .filter-link{
     display:block;
     cursor: pointer;
     padding-bottom:rfs(0.25rem);
     padding-top:rfs(0.25rem);
     &:hover{
       color:#7D7D7D;
     }
  }
  .filter-link.active{
     border-bottom:1px solid black;
  }
  @include max-small(){
      .nav__filters--panel.active{
        height:25rem;
        background:var(--color-two);
        color:white;
      }
  }
  @include min-large(){
    .nav__filters-mobile{
      display:none;
    }
   .link-parent:not(.nav__filters--all){
      font-size:24px;
      color:black;
      @include border-bottoms();
  }
  .nav__filters--all.active{
    color:black;
  }
  .nav__filters--label{
    color:#7D7D7D;
    position: relative;
  }
    .link-parent{
      font-size:24px;
    }
    .nav__filters{
      margin-bottom:2rem;
    }
    .nav__filters--panel {
      flex-direction: row;
      background:white;
      color:black;
      padding:0px;
      transition:1s ease all;
      position: relative;
      height:3rem;
    }
    .nav__filters--panel.filter-active{
      height:8rem;
    }
    .nav__filters--childpanel{
      top:5px;
      left:150px;
      width:calc(100% - 150px);
    }
    .nav__filters--mobile{
      display: none;
    }
    .nav__filters--all{
      width:150px;
    }
    .nav__filters--childnav{
      flex-direction: row;
      flex-wrap:wrap;
      justify-content:flex-start;
      margin-left:5rem;
      li{
        width:150px;
      }
    }
    .nav__filters--label{
       position: absolute;
       top:-1.5rem;
       left:5rem;
     }
     .nav__filters--close{
       display:none;
     }
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
<template>
  <div class="work__work" v-if="content">
    <div class="wrap gut--xs">
      <div class="row">
        <h2 class="chapter fs__h space--2">{{ $t("workslogan") }}</h2>
        <div class="col col-12">
          <nav class="nav__filters">
            <a v-if="!mobile" @click="mobile = true" class="nav__filters--mobile">{{$t('filter')}}</a>
            <ul class="nav__filters--panel" :class="{'active':mobile, 'filter-active':filterActive}">
              <li v-if="mobile" class="nav__filters-mobile"><a @click="mobile = false">{{$t('sluiten')}}</a></li>
              <li class="nav__filters--all link-parent" :class="{'active': filterActive}">
                <a
                  @click="filterActive = null,
                  filtersGet = [],
                  mobile = true,
                  filterRequest()">
                  <template v-if="filterActive">
                    <i class="ico-i_left"></i>
                    <span>{{$t('all')}}</span>
                  </template>
                  <template v-else>
                    <span class="nav__filters--home"><span>Filters</span> <Preloader v-if="filters.length === 0 || loading === true" /></span>
                  </template>
                </a>
              </li>
              <template v-for="(filterlist,x) in filters.filters">
                <transition name="slide-fade" :key="'filter-sub-anim'+x">
                  <template v-if="filterActive === null || filterActive === x">
                    <li :key="'filter-sub'+x" v-if="filterActive === null">
                      <a class="filter-link link-parent" @click="filterActive = x">{{$t('per')}} {{filterlist.name}}</a>
                    </li>
                    <template v-if="filterActive === x">
                        <li class="nav__filters--childpanel">
                          <ol><li class="nav__filters--label fs__b xs">{{$t('per')}}{{filterlist.name}}</li></ol>
                          <ol class="nav__filters--childnav">
                            <li v-for="(child, c) in filterlist.children" :key="'child'+c">
                              <a
                              @click="toggleFilters(child.slug)"
                              class="filter-link"
                              :class="{'active': filtersGet.includes(child.slug)}"
                              v-html="child.name">
                                </a>
                            </li>
                          </ol>
                        </li>
                    </template>
                  </template>
                </transition>
              </template>
             </ul>
          </nav>
        </div>
        <div class="col col-12 grid g3">
        <template v-for="(cardItem, i) in content">
          <Card class="card xs" v-on:toggleProjects="showProjects = false" :class="{'active':showProjects}" :card="cardItem" :key="'work'+i" />
        </template>
        </div>
      </div>
      <div class="col col-12">
        <div class="box ali--mc cta">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'
import Card from '@/components/Card.vue'
import Preloader from '@/components/Preloader.vue'
import Vue from 'vue'
import typy from 'typy'


// serializer for query parameters
var qs = require('qs')

export default {
  mixins: [contenthelpers],
  components: { Card },
  name: 'Work',
  data: function () {
    return {
      content: [],
      filters: [],
      filterActive: null,
      filtersGet: [],
      mobile: false,
      loading: false,
      paged: 1,
      showProjects:true
    }
  },
  asyncData({ app, params, query, store, $axios }) {
    const url = `${process.env.bpApi}/work`
   
    const queryParsed = qs.parse(query.q)
    let filtersGet = []
    let paged = 1
   
    if (typy(queryParsed, 'filter').isDefined) {
      filtersGet = queryParsed.filter
      paged = queryParsed.pages
    }
   
    return $axios.get(url, {
          params: {
            filter: filtersGet,
            paged: paged
          }
        }).then((response) => {
          return {
            content:response.data.works
          }
        })
  },
  mounted () {
    // get query string
    const params = qs.parse(this.$route.query.q)
    if (typy(params, 'filter').isDefined) {
      this.filtersGet = params.filter
      this.paged = params.pages
    }
    this.setFilters();
  },
  methods: {
    setFilters () {
      this.$axios.get(`${process.env.bpApi}/filters`).then((response) => {
        this.filters = response.data
      })
    },
    toggleFilters (filter) {
      this.filtersGet = []
      this.filtersGet.push(filter)
      this.filterRequest()
      this.mobile = false
    },
    filterRequest () {
      if (!this.loading) {
        this.$axios.get(`${process.env.bpApi}/work`, {
          params: {
            filter: this.filtersGet,
            paged: this.paged
          },
          paramsSerializer: params => {
            const stringifiedParams = qs.stringify(params)
            // set params
            this.$router.replace({ query: { q: stringifiedParams } })
            return stringifiedParams
          }
        }).then((response) => {
          this.content = response.data.works
          this.loading = false
        })
        this.loading = true
      }
    }
  }
}
</script>
