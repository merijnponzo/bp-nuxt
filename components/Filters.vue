<style lang="scss" scoped>
  $filter-width:200px;
  .nav__filters--home{
    display:flex;
    align-items: center;
    margin-bottom:2rem;
    span:nth-child(1){
      margin-right:rfs(0.5rem);
    }
  }
  sup{
    font-family:var(--font-expressive-1);
    font-weight:bold;
  }
  .filters--count{

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
    height:40px;
    bottom:0px;
    transition:1s ease all;
    padding:10px;
    li{
      margin-right:rfs(5rem);
    }
    a{
      @include noselect();
    }
  }
  .nav__filters--close{
    position: absolute;
    right:2rem;
    top:2rem;
  }
  .nav__filters--childpanel{
    position: absolute;
    top:50px;
    width:100%;
    font-family: var(--productive-1);
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
         width:100%;
       }
    }
 
  .nav__filters--all{
    width:100%;
    display:flex;
    align-items: center;
    margin-right:0px!important;
    color:#7D7D7D;
    font-family: var(--productive-1);
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
    font-family: var(--productive-1);
  }
  .filter-link{
     display:block;
     cursor: pointer;
     padding-bottom:rfs(0.25rem);
     padding-top:rfs(0.25rem);
     font-size:18px;
     font-family: var(--productive-1);
     &:hover{
       color:#7D7D7D;
     }
  }
  .filter-link.active{
     border-bottom:1px solid black;
  }
  .nav__filters--mobile{
      padding-bottom:10px;
      margin-bottom:10px;
      display: block;
      font-family: var(--productive-1);
  }
  @include max-small(){
      .nav__filters--panel.active{
        height:80vh;
        background:var(--color-two);
        color:white;
        padding-top:2rem;
        padding-left:2rem;
        li{
          margin-bottom:0.5rem;
        }
      }
      .nav__filters--label{
        margin-top:1rem;
      }
      .nav__filters--all{
        margin-bottom:1rem;
      }
     
      .nav__filters--panel{
        overflow:hidden;
      }
      // expertise filter
      li.filter--6{
          width:calc(50% - 10px);
          margin-right:10px;
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
      left:$filter-width;
      width:calc(100% - #{$filter-width});
    }
    .nav__filters--mobile{
      display: none;
    }
    .nav__filters--all{
      width:$filter-width;
    }
    .nav__filters--childnav{
      flex-direction: row;
      flex-wrap:wrap;
      justify-content:flex-start;
      margin-left:5rem;
      li{
        width:$filter-width;
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
</style>
<template>
    <div class="col col-12">
      <nav class="nav__filters">
        <a v-if="!mobile" @click="mobile = true" class="nav__filters--mobile">&#8594; {{$t('filter')}}</a>
        <ul class="nav__filters--panel" :class="{'active':mobile, 'filter-active':filterActive}">
          <li v-if="mobile" class="nav__filters-mobile"><a class="nav__filters--close" @click="mobile = false"><i class="ico-i_close"></i></a></li>
          <li class="nav__filters--all link-parent" :class="{'active': filterActive}">
            <router-link
              to="/work"
              @click.native="filterActive = null,
              filtersGet = [],
              mobile = true">
              <template v-if="filterActive">
                <i class="ico-i_left"></i>
                <span>{{$t('all')}}</span>
              </template>
              <template v-else>
                <span class="nav__filters--home">
                   <span v-if="!mobile">&#8594;</span>
                   <span>Filters</span>
                   <Preloader v-if="filters.length === 0 || loading === true" />
                </span>
              </template>
            </router-link>
          </li>
          <template v-for="(filterlist,x) in filters.filters">
            <transition name="slide-fade" :key="'filter-sub-anim'+x">
              <template v-if="filterActive === null || filterActive === x">
                <li :key="'filter-sub'+x" v-if="filterActive === null">
                  <a class="filter-link link-parent" @click="filterActive = x">{{$t('per')}} {{filterlist.name}}</a>
                </li>
                <template v-if="filterActive === x">
                    <li class="nav__filters--childpanel">
                      <ol><li class="nav__filters--label fs__b xs">{{$t('per')}} {{filterlist.name}}</li></ol>
                      <ol class="nav__filters--childnav">
                        <li v-for="(child, c) in filterlist.children" :key="'child'+c" :class="`filter--${filterActive}`">
                          <router-link
                            :to="`/work/filter/${child.parentslug}/${child.slug}`"
                            @click.native="toggleFilters(child.slug)"
                            class="filter-link"
                            :class="{'active': filtersGet.includes(child.slug)}"
                            >
                            <span v-html="child.name"></span>
                            <sup class="filters--count" v-if="child.parent != 6">
                            {{child.count}}
                            </sup>
                          </router-link>
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
</template>
<script>
export default {
  name: 'Visual',
  props: {
  
  },
  data: function () {
    return {
      filters: [],
      filterActive: null,
      filtersGet: [],
      mobile: false,
      loading: false,
      paged: 1,
    }
  },
  mounted () {
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
      // do filter request
      this.mobile = false
    }
  }
}
</script>
