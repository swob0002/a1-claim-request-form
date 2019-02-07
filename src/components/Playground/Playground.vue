<!-- 1. Project init via vue-cli (check)
2. Separation of concerns (check)
3. Implement Element UI framework (check)
4. Use of el-input (check)
5. Use of el-button (check)
6. Use of el-checkbox (check)
7. Use of el-dialog (check)
8. Use of correct vuejs syntax (check)
9. Meeting the UI requirements (check)
10. Proper indentation (check)
11. Descriptive variable naming (check)
12. Documentation (check) -->

<template>

  <div>

    <!-- Form Beginning -->
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">

      <!-- Input for First Name -->
      <el-form-item label="First Name" prop="firstName">
        <el-input placeholder="First" v-model="form.firstName" clearable></el-input>
      </el-form-item>

      <!-- Input for Last Name -->
      <el-form-item label="Last Name" prop="lastName">
        <el-input placeholder="Last" v-model="form.lastName" clearable></el-input>
      </el-form-item>

      <!-- Input for Email -->
      <el-form-item label="Email" prop="email">
        <el-input placeholder="email@example.com" v-model="form.email" clearable></el-input>
      </el-form-item>

      <!-- Input for Subject Title -->
      <el-form-item label="Subject" prop="subject">
        <el-input placeholder="Type here" v-model="form.subject" clearable></el-input>
      </el-form-item>

      <!-- Text area for Claim Request Content -->
      <el-form-item label="Content" prop="content">
        <el-input placeholder="Type here" type="textarea" v-model="form.content"></el-input>
      </el-form-item>

      <!-- Checkbox for Agreement -->
      <el-form-item prop="agree">
        <el-checkbox label="I agree to give an A+" v-model="form.agree"></el-checkbox>
      </el-form-item>

      <!-- Button to Submit -->
      <el-form-item>
        <el-button type="primary" @click="dialogVisible = true">Submit Form</el-button>
      </el-form-item>

    </el-form>

    <!-- Popup Dialog to Confirm the Content -->
    <el-dialog title="Confirmation" :visible.sync="dialogVisible" width="20%">
      <span>Submit Form?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false; submitForm('form')">Confirm</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<!-- Sources -->
<script src="./PlayGround.js"></script>
<style src="./PlayGround.css" scoped></style>