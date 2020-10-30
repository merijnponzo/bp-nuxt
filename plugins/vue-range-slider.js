import typy from 'typy'

export default ({ app, store, $axios }, inject) => {
  app.workQuery = (query, params) => {
    // limit
    let queryparams = '?_limit=24'
    const url = `${process.env.bpApi}/work`
    // do filter
    let filter = {}
    if(typy(params,'slug').isDefined){
      filter = { params : {filter : params.slug }}
    }
    console.log(url, filter)
    return $axios.get(url, filter).then(response => {
      return {
        content:response.data.works
      }
    })
  }
}
