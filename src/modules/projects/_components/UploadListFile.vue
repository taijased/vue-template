

<template lang="pug">
    .uploader
        el-switch(
          v-model='switcher',
          active-text='3D Модель',
          inactive-text='Текстуры'
          @change="changeTrigger")
        //- for 3d model
        input(
            v-if="switcher",
            ref="modelFiles"
            type='file', 
            name='file', 
            @change='previewFiles', 
            webkitdirectory='', 
            mozdirectory='', 
            msdirectory='', 
            odirectory='', 
            irectory='', 
            multiple='')
        //- for texture
        input(
            v-else
            ref="modelFileTexture"
            type='file',
            @change="previewFile",
            name='file')

        el-tree(v-if="switcher", :data='data', :props='defaultProps', @node-click='handleNodeClick', default-expand-all='')

        el-button(
            v-else,
            size='small', 
            type='success', 
            @click='submitUploadTexture') Загрузить текстуры

        el-button(
            v-if="data.length > 0",
            size='small', 
            type='success'
            @click="submitUpload") Загрузить на 3d модель
</template>
<script>
import axios from 'axios';
import { error } from 'util';
  export default {
    data() {
      return {
        baseUrl: "https://api.ari.arq.su",
        textureFile: null,
        fileList: [],
        aliase: '',
        data: [],
        switcher: false,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        error: false
      };
    },
    methods: {
      previewFiles() {
        this.fileList = this.$refs.modelFiles.files
        this.setTree()
      },
      previewFile() {
        this.textureFile = this.$refs.modelFileTexture.files[0]
      },
      setTree() {
        var allFiles = this.$refs.modelFiles.files
        this.aliase = this.fileList[0].webkitRelativePath.split('/')[0]

        let result = [{
            label: this.aliase,
            children: []
        }]

        let countDae = 0
        for (let i = 0; i < this.fileList.length; i++) {

            let fileNameArr = this.fileList[i].name.split('.')
            let extensions = fileNameArr[fileNameArr.length - 1]
            if (extensions == "dae" || extensions == "DAE") countDae++
            result[0].children.push({
              label: this.fileList[i].name
            })
           

        }
        if (countDae == 0) {
          this.$message.error('Нету файла с расширением .dae. Попробуйте загрузить снова')
        } if (countDae > 1) {
          this.$message.error('Больше одного файла с раширением .dae')
        } else {
          this.data = result
        }
        

      },
      handleNodeClick(data) {
        console.log(data);
      },
      submitUpload() {
        console.log(this.fileList);
        let formData = new FormData();
        // formData.append('file', this.fileList);
        let url = this.baseUrl + '/model?aliase=' + this.aliase
  
        for( var i = 0; i < this.fileList.length; i++ ){
          let file = this.fileList[i];
          formData.append('files[' + i + ']', file);
        }
        axios.post(url, formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("Sad :" + error);
        });
      },
      submitUploadTexture() {
        console.log(this.textureFile);
        let formData = new FormData();
        formData.append('file', this.textureFile);
        let temp_aliase = this.textureFile.name.split(".")[this.textureFile.name.split(".").length - 2]
        let url = this.baseUrl + '/texture?aliase=' + temp_aliase

        console.log(temp_aliase);
        axios.post(url, formData,
          {
            headers: {
              'Accept': 'application/json; charset=utf-8',
              'Accept-Language': 'ru-RU,ru;q=0.5',
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*'
            }
          }
        ).then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      },
      changeTrigger() {
        this.data = []
        this.fileList = []
      }
    }


  }
</script>

<style lang="stylus">
input
  margin-bottom 25px
.el-switch
  margin 25px 0
.el-tree
  margin 25px 0
</style>
