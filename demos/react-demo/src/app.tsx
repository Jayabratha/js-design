import React, { useState, useEffect } from 'react';
import zestLogo from './js-logo.svg';
import logo from './logo.svg';
import { ThemeContext } from './theme-context';
import './app.css';
import '@jsdesign/jsd-button';
import '@jsdesign/jsd-input';
import '@jsdesign/jsd-radio-chip';
import '@jsdesign/jsd-radio';
import '@jsdesign/jsd-checkbox';
import '@jsdesign/jsd-select';
import Model from './model';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [model, setModel] = useState<Model>({
    name: 'John',
    age: 30,
    address: 'Bangalore',
    gender: '',
    diet: '',
    department: '',
    agreement: true
  });
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    address: '',
    gender: '',
    diet: '',
    department: '',
    agreement: ''
  });

  useEffect(() => {
    /* We are dispatching custom change event as the default chnage event doesn't bubble up the shadow DOM
       So change event needs to be manually attached as the React onChange doesn't get invoked on custom change event
       We could also optionally use the onClick handler on the element but make sure it is handled properly as it gets 
       triggered twice as we are click on label and not the input directly.
       We can also use custom change handler if we can to validate to DOM onchange event instead on each input */
    const form = document.getElementById('form');

    function updateState(e: any) {
      // setModel({ ...model});
    }
    form?.addEventListener('change', updateState);

    return function cleanup() {
      form?.removeEventListener('change', updateState);
    }
  });

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const updateForm = (e: any) => {
    let event = { ...e };
    console.log(event);
    setTimeout(() => {
      const elem = event.target;
      const property = elem.id;
      let value = elem.getAttribute('value');
      if (property === 'agreement') {
        value = JSON.parse(value).length ? true : false;
      }
      const updatedModel = { ...model, [property]: value }
      setModel(updatedModel);
      validateForm({ [property]: value });
      event = null;
    }, 0);
  }

  const requiredValidation = (property: string, value: string, errors: any) => {
    if (value) {
      errors = { ...errors, [property]: '' };
    } else {
      errors = { ...errors, [property]: `Please enter ${property}` };
    }

    return errors;
  }

  const validateForm = (model: any) => {
    let errorList: any = { ...errors };
    Object.keys(model).forEach((property) => {
      errorList = requiredValidation(property, model[property], errorList);
    });
    setErrors(errorList);
  }

  const submitForm = (event: any) => {
    event.preventDefault();
    validateForm(model);
    console.log('Submit!');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <div className="container">
          <header className="app-header">
            <div className='logo-wrapper'>
              <div className='logos'>
                <img src={zestLogo} className='jsd-logo' alt="Zest logo" />
                <img src={logo} className="app-logo" alt="React logo" />
                <h1>JS Design - React Demo</h1>
              </div>
              <div className={`theme-toggler ${theme}`} onClick={toggleTheme}></div>
            </div>
            <div className='desc'>A simple minimalistic web-component set to build form elements irrespective of your choice of web framework.</div>
            <jsd-button label='Explore'></jsd-button><jsd-button btn-style='secondary' theme={theme} label='Docs'></jsd-button>
          </header>
          <main>
            <div className='demo-form'>
              <h2>Demo Form</h2>
              <div className='form-wrapper'>
                <form id='form' className='form' onInput={updateForm} onSubmit={submitForm}>
                  <div className='form-field'>
                    <jsd-input id='name'
                      name='name'
                      label='name'
                      placeholder='Enter your full name'
                      error-msg={errors.name}
                      full-width='true'
                      autofocus
                      theme={theme}
                      required='true'
                      value={model.name}>
                    </jsd-input>
                  </div>
                  <div className='form-field'>
                    <jsd-input id='age'
                      name='age'
                      label='age'
                      placeholder='Enter your age'
                      error-msg={errors.age}
                      type='number'
                      min='18'
                      max='60'
                      full-width='true'
                      theme={theme}
                      required='true'
                      value={model.age}>
                    </jsd-input>
                  </div>
                  <div className='form-field'>

                    <jsd-input id='address'
                      name='address'
                      label='address'
                      placeholder='Enter your address'
                      error-msg={errors.address}
                      full-width='true'
                      theme={theme}
                      required='true'
                      value={model.address}>
                    </jsd-input>
                  </div>
                  <div className='form-field'>
                    <jsd-radio-chip id='gender'
                      name='gender'
                      label='gender'
                      inline='true'
                      theme={theme}
                      value={model.gender}
                      error-msg={errors.gender}
                      required='true'
                      list='["Male", "Female", "Other"]'>
                    </jsd-radio-chip>
                  </div>
                  <div className='form-field'>
                    <jsd-select id='department'
                      name='department'
                      label='department'
                      full-width='true'
                      theme={theme}
                      value={model.department}
                      error-msg={errors.department}
                      list='["Product", "Tech", "Growth"]'>
                    </jsd-select>
                  </div>
                  <div className='form-field'>
                    <jsd-radio id='diet'
                      name='diet'
                      label='diet'
                      inline='true'
                      theme={theme}
                      value={model.diet}
                      error-msg={errors.diet}
                      required='true'
                      list='["Vegeterian", "Non-Vegeterian"]'>
                    </jsd-radio>
                  </div>
                  <div className='form-field'>
                    <jsd-checkbox id='agreement'
                      name='agreement'
                      theme={theme}
                      value={model.agreement ? '["agree"]' : '[]'}
                      error-msg={errors.agreement}
                      required='true'
                      list='[{"value": "agree", "label": "<p style=\"margin: -15px 0 0\">I agree to the <jsd-button btn-style=\"tertiary\" label=\"Terms and Conditions\">Test</jsd-button></p>"}]'>
                    </jsd-checkbox>
                  </div>
                  <jsd-button type='submit' label='Submit' full-width='true'></jsd-button>
                </form>
                <div className='model'>
                  <div><span className='label'>Name -</span><span className='value'>{model.name}</span></div>
                  <div><span className='label'>Age -</span><span className='value'>{model.age}</span></div>
                  <div><span className='label'>Address -</span><span className='value'>{model.address}</span></div>
                  <div><span className='label'>Gender -</span><span className='value'>{model.gender}</span></div>
                  <div><span className='label'>Department -</span><span className='value'>{model.department}</span></div>
                  <div><span className='label'>Diet -</span><span className='value'>{model.diet}</span></div>
                  <div><span className='label'>Agreement -</span><span className='value'>{model.agreement.toString()}</span></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
