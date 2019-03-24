import ProjectService from '../_api/ProjectService'

export function updateShowProject({ commit }) {
  commit("UPDATE_PROJECT");
}



export function fetchModelList({commit}) {
  try {
    new Promise((resolve, reject) => {
      ProjectService.fetchModelList()
        .then(response => {
          console.log(response.data);
          commit("UPDATE_MODEL_LIST", response.data.models);
          resolve(response)
        })
        .catch(error => {
          console.log("fetchModelList: " + error);
          reject(error)
        })
    })
  } catch (error) {
    console.log(error);
  }
}