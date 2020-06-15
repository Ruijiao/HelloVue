<template>
  <div>
    <a-row class="warp">
      <a-col :span="24" class="warp-main">
        <a-form ref="infoForm" :rules="rules" label-width="120px">
          <a-form-item label="标题" prop="a_title" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-model="infoForm.a_title"></a-input>
          </a-form-item>
          <a-form-item label="来源" prop="a_source" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-model="infoForm.a_source"></a-input>
          </a-form-item>
          <a-form-item label="详细" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <div class="edit_container">
                <quill-editor
                    v-model="infoForm.a_content"
                    ref="myQuillEditor"
                    class="editer"
                    :options="infoForm.editorOption"
                    @ready="onEditorReady($event)"
                >
                </quill-editor>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="onSubmit">确认提交</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor' //调用编辑器
  export default {
    components: {
        //使用编辑器
        quillEditor
    },
    data() {
      return {
        infoForm: {
          a_title: '',
          a_source: '',
          a_content:'',
          editorOption: {}
        },
        //表单验证
        rules: {
          a_title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          a_content: [
            {required: true, message: '请输入详细内容', trigger: 'blur'}
          ]
        },
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      //初始化
    },
    methods: {
      onEditorReady(editor) {
      },
      onSubmit() {
        //提交
//this.$refs.infoForm.validate，这是表单验证
        this.$refs.infoForm.validate((valid) => {
          if(valid) {
            this.$post('m/add/about/us',this.infoForm).then(res => {
              if(res.errCode == 200) {
                this.$message({
                  message: res.errMsg,
                  type: 'success'
                });
                this.$router.push('/aboutus/aboutlist');
              } else {
                this.$message({
                  message: res.errMsg,
                  type:'error'
                });
              }
            });
          }
        });
      }
    }
  }
</script>