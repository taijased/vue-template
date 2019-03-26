import ProjectService from '../_api/ProjectService'
import FileWorkerService from '../_api/FileWorkerService';

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


// export function setPositionX({ commit }, valueX) {
//   commit("UPDATE_POSITIONX", valueX);
// }
// export function setPositionY({ commit }, valueY) {
//   commit("UPDATE_POSITIONX", valueY);
// }
// export function setPositionZ({ commit }, valueZ) {
//   commit("UPDATE_POSITIONX", valueZ);
// }



export function fetchModelFromServer({commit}, payload) {
  try {
    new Promise((resolve, reject) => {
      ProjectService.fetchModelWithAliase(payload)
        .then(response => {
          console.log(response);
          commit("UPDATE_LOADING_STATUS", false);

          FileWorkerService.saveFileInBrowser(response.data)

          resolve(response)
        })
        .catch(error => {
          console.log("fetchModelFromServer: " + error);
          reject(error)
        })
    })
  } catch (error) {
    console.log(error);
  }
}
