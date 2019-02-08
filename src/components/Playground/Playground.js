export default {
    
    name: 'PlayGround',

    data() {

      return {
        // contains form data
        form: {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          content: '',
          agree: [],
        },
        // sets rules for form and error messaging
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
            type: 'array',
            required: true,
            message: 'Must agree',
            trigger: 'change'
          }]
        },
        dialogVisible: false
    }
  },

  //
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => { // validates form
        if (valid) {
          alert('submit!'); // test
        }
        else {
          alert('error submit!!'); // test
          return false;
        }
      });
    }
  }
};

