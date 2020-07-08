<style lang="scss" scoped>
  .card.active{
    opacity:1;
  }
  .card{
    transition:1s ease all;
    opacity:0;
  }
  .work__work{
    margin-top:rfs(5rem);
  }
  .nav__filters--panel.active{
    overflow: hidden;
    height:50vh;
    background:var(--color-two);
    color:white;
  }
  .nav__filters--panel{
    background:var(--color-two);
    color:white;
    display:flex;
    position: fixed;
    overflow:hidden;
    height:0px;
    align-items: flex-start;
    flex-direction: column;
    margin:0px;
    z-index:100;
    width:100%;
    left:0px;
    bottom:0px;
    transition:1s ease all;
    padding:rfs(1rem);
    li{
      margin-right:rfs(5rem);
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
  }
  .nav__filters--childnav{
       display:flex;
       height:100%;
       align-items: flex-start;
       flex-direction: column;
       li{
         margin-right:rfs(1.5rem);
       }
    }
  .nav__filters--all{
    width:rfs(150px);
    display:flex;
    align-items: center;
  }
  .nav__filters--label{
    position: relative;
  }
  .filter-link{
     cursor: pointer;
  }
  .filter-link.active{
     border-bottom:1px solid black;
  }
  @include min-large(){
    .nav__filters{
      height:rfs(100px);
    }
    .nav__filters--panel,  .nav__filters--panel.active {
      flex-direction: row;
      align-items: flex-end;
      height:rfs(50px);
      position: relative;
      background:white;
      color:black;
      padding:0px;
    }
    .nav__filters--childpanel{
      top:0px;
      left:rfs(150px);
      height:rfs(50px);
    }
    .nav__filters--mobile{
      display: none;
    }
    .nav__filters--panel{
      height:50px;
      position: relative;
    }
    .nav__filters--childnav{
      flex-direction: row;
       align-items: flex-end;
    }
    .nav__filters--label{
       position: absolute;
       top:0px;
       left:0px;
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
            <ul class="nav__filters--panel" :class="{'active':mobile}">
              <li class="nav__filters--close" v-if="mobile"><a @click="mobile = false">{{$t('sluiten')}}</a></li>
              <li>
                <a class="nav__filters--all"
                  @click="filterActive = null,
                  filtersGet = [],
                  filterRequest()">
                  <i v-if="filterActive" class="ico-i_left"></i><span>{{$t('all')}}</span>
                </a>
              </li>
              <template v-for="(filterlist,x) in filters.filters">
                <transition name="slide-fade" :key="'filter-sub-anim'+x">
                  <template v-if="filterActive === null || filterActive === x">
                    <li :key="'filter-sub'+x" v-if="filterActive === null">
                      <a class="filter-link" @click="filterActive = x">{{$t('per')}} {{filterlist.name}}</a>
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
        <template v-for="(cardItem, i) in content">
          <Card class="col col-4 card xs" v-on:toggleProjects="showProjects = false" :class="{'active':showProjects}" :card="cardItem" :key="'work'+i" />
        </template>
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
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.bpApi}/work`
    
    return $axios.get(url).then(response => {
      return {
       content:response.data.works
      }
    })
  },
  mounted () {
    // get query string
    const params = qs.parse(this.$route.query.q)
    if (typy(params, 'filters').isDefined) {
      this.filtersGet = params.filters
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
