<template>
  <div class="app" v-bind:class="theme">
    <div class="container">
      <header class="app-header">
        <div class='logo-wrapper'>
          <div class='logos'>
            <img src="../assets/js-logo.svg" class='jsd-logo' alt="JS Design logo" />
            <img src="../assets/logo.png" class="angular-logo" alt="Angular logo" />
            <h1>JS Design UI - Vue Demo</h1>
          </div>
          <div class="theme-toggler" v-bind:class="theme" v-on:click="toggleTheme()"></div>
        </div>
        <div class='desc'>A simple minimalistic web-component set to build form elements irrespective of your choice of
          web framework.</div>
        <jsd-button label='Explore'></jsd-button>
        <jsd-button btn-style='secondary' v-bind:theme="theme" label='Docs'></jsd-button>
      </header>
      <main>
        <div class='demo-form'>
          <h2>Demo Form</h2>
          <div class='form-wrapper'>
            <form id='form' class='form' v-on:input='updateForm' v-on:submit='submitForm'>
              <div class='form-field'>
                <jsd-input id='name' name='name' label='name' placeholder='Enter your full name' v-bind:theme='theme'
                  v-bind:value='model.name' v-bind:error-msg='errors.name' full-width='true' autofocus required='true'>
                </jsd-input>
              </div>
              <div class='form-field'>
                <jsd-input id='age' name='age' label='age' placeholder='Enter your age' v-bind:theme='theme'
                  v-bind:value='model.age' v-bind:error-msg='errors.age' type='number' min='18' max='60' full-width='true'
                  required='true'>
                </jsd-input>
              </div>
              <div class='form-field'>
                <jsd-input id='address' name='address' label='address' placeholder='Enter your address'
                  v-bind:theme='theme' v-bind:value='model.address' v-bind:error-msg='errors.address' full-width='true'
                  required='true'>
                </jsd-input>
              </div>
              <div class='form-field'>
                <jsd-radio-chip id='gender' name='gender' label='gender'inline v-bind:theme='theme'
                  v-bind:value='model.gender' v-bind:error-msg='errors.gender' required='true'
                  list='["Male", "Female", "Other"]'>
                </jsd-radio-chip>
              </div>
              <div class='form-field'>
                <jsd-select id='department' name='department' label='department'inline v-bind:theme='theme'
                  v-bind:value='model.department' v-bind:error-msg='errors.department' full-width='true' required='true'
                  list='["Product", "Tech", "Growth"]'>
                </jsd-select>
              </div>
              <div class='form-field'>
                <jsd-radio id='diet' name='diet' label='diet'inline v-bind:theme='theme' v-bind:value='model.diet'
                  v-bind:error-msg='errors.diet' required='true' list='["Vegeterian", "Non-Vegeterian"]'>
                </jsd-radio>
              </div>
              <div class='form-field'>
                <jsd-checkbox id='agreement' name='agreement' v-bind:theme='theme'
                  v-bind:value='model.agreement ? "[\"agree\"]" : "[]"' v-bind:error-msg='errors.agreement'
                  required='true'
                  list='[{"value": "agree", "label": "<p style=\"margin: -15px 0 0\">I agree to the <jsd-button btn-style=\"tertiary\" label=\"Terms and Conditions\">Test</jsd-button></p>"}]'>
                </jsd-checkbox>
              </div>
              <jsd-button type='submit' label='Submit' full-width='true'></jsd-button>
            </form>
            <div class='model'>
              <div><span class='label'>Name -</span><span class='value'>{{model.name}}</span></div>
              <div><span class='label'>Age -</span><span class='value'>{{model.age}}</span></div>
              <div><span class='label'>Address -</span><span class='value'>{{model.address}}</span></div>
              <div><span class='label'>Gender -</span><span class='value'>{{model.gender}}</span></div>
              <div><span class='label'>Department -</span><span class='value'>{{model.department}}</span></div>
              <div><span class='label'>Diet -</span><span class='value'>{{model.diet}}</span></div>
              <div><span class='label'>Agreement -</span><span class='value'>{{model.agreement.toString()}}</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import '@jsdesign/jsd-button';
import '@jsdesign/jsd-input';
import '@jsdesign/jsd-radio';
import '@jsdesign/jsd-radio-chip';
import '@jsdesign/jsd-checkbox';
import '@jsdesign/jsd-select';

export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'angular-demo',
      theme: 'light',
      model: {
        name: 'John',
        age: 30,
        address: 'Bangalore',
        gender: '',
        department: '',
        diet: '',
        agreement: false
      },
      errors: {
        name: '',
        age: '',
        address: '',
        gender: '',
        department: '',
        diet: '',
        agreement: ''
      }
    }
  },
  methods: {
    toggleTheme: function () {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
    updateForm: function (event) {
      setTimeout(() => {
      const elem = event.target;
      const property = elem.id;
      let value = elem.getAttribute('value');
      if (property === 'agreement') {
        value = JSON.parse(value).length ? true : false;
      }
      this.model[property] = value; 
      this.validateForm({[property]: value});
      event = null;
    }, 0);
    },
    submitForm: function () {
      console.log('Submit Form');
      this.validateForm(this.model);
    },
    requiredValidation(property, value, errors) {
    if (value) {
      errors[property] = '';
    } else {
      errors[property] = `Please enter ${property}`;
    }
    return errors;
    },
    validateForm(model) {
      let errorList = {...this.errors};
      Object.keys(model).forEach((property) => {
        errorList = this.requiredValidation(property, model[property], errorList);
      });
      console.log(errorList);
      this.errors = errorList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app.dark {
  background-color: #282c34;
  color: #ffffff;
}

.app.dark .model {
  background: rgba(255, 255, 255, 0.3);
}

.app.dark .label {
  color: #b5b5b5;
}

.app.light {
  background-color: #ffffff;
  color: #282c34;
}

.desc {
  margin: 20px 0;
}

.container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
}

h1, h2 {
  font-weight: 500;
}

.form-field {
  padding: 5px 0;
}

.app-header {
  font-size: 1rem;
  padding: 20px 0 20px;
}

.app-header img {
  color: #61dafb;
  height: 100%;
  vertical-align: middle;
}

.logo-wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logos {
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
}

.logos img.app-logo {
  pointer-events: none;
}

.logos img.jsd-logo {
  height: 35px;
  margin-right: 15px;
}

.logos h1 {
  margin-left: 20px;
}

.theme-toggler {
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.theme-toggler.dark {
  background-color: #ffffff;
}

.theme-toggler.light {
  background-color: #282c34;
}

.demo-form {
  width: 100%;
  margin-top: 20px;
}

.form-wrapper {
  display: flex;
  padding-bottom: 20px;
}

.form {
  width: 50%;
  margin-right: 20px;
}

.model {
  width: 50%;
  background-color: #f6f6f6;
  border: 1px solid #edebeb;
  margin: 0;
  border-radius: 0.5rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
}

.label {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  color: #909090;
  padding: 0.6rem;
  text-align: right;
  width: 120px;
}

.value {
  font-size: 1.1rem;
}
</style>
