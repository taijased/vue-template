

export const UPDATE_PROJECT = state => state.showProject = !state.showProject
export const UPDATE_MODEL_LIST = (state, modelList) => state.modelList = modelList
export const UPDATE_LOADING_STATUS = (state, status) => state.loadingStatus = status
export const UPDATE_SIZE_SLIDER = (state, size) => state.sizeSlider = size


export const UPDATE_CAMERA_POSITION = (state, cameraPosition) =>  state.cameraPosition = cameraPosition