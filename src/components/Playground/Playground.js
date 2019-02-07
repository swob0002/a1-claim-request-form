export default {
    
    name: 'PlayGround',

    data() {

      return {

        form: {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          content: '',
          agree: false
        },
        rules: {
          firstName: [{
            required: true,
            message: 'Field required',
            trigger: 'blur'
          }],
          lastName: [{
            required: true,
            message: 'Field required',
            trigger: 'blur'
          }],
          email: [{
            required: true,
            message: 'Field required',
            trigger: 'blur'
          }],
          subject: [{
            required: true,
            message: 'Field required',
            trigger: 'blur'
          }],
          content: [{
            required: true,
            message: 'Field required',
            trigger: 'blur'
          }],
          agree: [{
            required: true,
            message: 'Must agree',
            trigger: 'change'
          }]
        },
        dialogVisible: false
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => { // validates form
        if (valid) {
          alert('submit!'); // another popup
        } else {
          console.log('error submit!!'); // sent to console message
          return false;
        }
      });
    }
  }
};