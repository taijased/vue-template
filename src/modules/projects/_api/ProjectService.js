import Api from '../../../api/Api.js'



const ProjectService = {
  fetchModelList () {
    return Api.get('/model?page=1&count=10')
  },
  fetchModelWithAliase(aliase) {
    return Api.get("/model/" + aliase, {responseType: 'arraybuffer'})
  },
}

export default ProjectService

