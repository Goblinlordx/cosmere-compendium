import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {getTypes, addType} from '../../api';

class Admin extends Component {
  state = {
    form: {
      singular: '',
      plural: '',
    }
  }
  loadTypes = () => {
   return getTypes()
    .then(index => {
      if (!index) return this.setState({invalid: true});
      this.setState({index, loading: false})
    })
    .catch(() => this.setState({loading: false}))
  }
  handleSubmit = e => {
    e.preventDefault();
    const {form} = this.state;
    return addType(form)
    .then(this.loadTypes)
    .then(() => {
      this.setState({
        form: {
          singular: '',
          plural: '',
        }
      });
    })
  }
  handleInputChange = e => {
    const {target: {name, value}} = e;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    });
  }
  componentWillMount() {
    return this.loadTypes();
  }
  render() {
    const {invalid} = this.state;
    if (invalid) {
      return <Redirect to='/404'/>;
    }
    const {loading, index, form} = this.state;
    if (!index || loading) return (
      <section>
        Loading
      </section>
    );
    return (
      <section>
        <ul>
          {
            index.map(t => <li key={t.id}>{t.singular}</li>)
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div><input type='text' name='singular' onChange={this.handleInputChange} value={form.singular}/></div>
          <div><input type='text' name='plural' onChange={this.handleInputChange} value={form.plural}/></div>
          <div><input type='submit'/></div>
        </form>
      </section>
    )
  }
}

export default Admin;