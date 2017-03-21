import React, {Component} from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import {getIndex} from '../../api';

class TypeLink extends Component {
  render() {
    const {url, type, item} = this.props;
    console.log(url, type, item)
    return (
      <span>
        <NavLink to={`${url}/${item.id}`}>{item.name}</NavLink>
      </span>
    );
  }
}

class TypeIndex extends Component {
  state = {}
  loadIndex(nextType) {
    const {match:{params:{type:typeStr}}} = this.props;

    this.setState({loading: true})
    getIndex(nextType || typeStr)
    .then(index => {
      if (!index) return this.setState({invalid: true});
      this.setState({index, loading: false})
    })
    .catch(() => this.setState({loading: false}))
  }
  componentDidMount() {
    this.loadIndex();
  }
  componentWillUpdate(next) {
    const {match:{params:{type:current}}} = this.props;
    const {match:{params:{type:nextType}}} = next;
    if (current !== nextType) this.loadIndex(nextType);
  }
  render() {
    const {invalid} = this.state;
    if (invalid) {
      return <Redirect to='/404'/>;
    }
    const {loading, index} = this.state;
    if (!index || loading) return (
      <section>
        Loading
      </section>
    );
    const {match:{url, params:{type}}} = this.props;
    return (
      <section>
        <h1>{type.plural}</h1>
        <ul>
          {
            index.map(ele => <li key={ele.id}><TypeLink url={url} type={type} item={ele}/></li>)
          }
        </ul>
      </section>
    );
  };
}

export default TypeIndex;