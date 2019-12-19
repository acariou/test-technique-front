import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import List from '../components/List';
import { fetchMovies } from '../actions/ApiActions';
import { Container } from '@material-ui/core';

class Movies extends Component {  
  
  constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
      const { dispatch }  = this.props;
      dispatch(fetchMovies());
    }

    render() {
        const { listMovies: { isPending, movies: { results } } } = this.props;

        return (
            <Container fixed>
                { !results && <Loader type="Oval" color="#000" height={80} width={80} /> }
                { !results && !isPending && <p>Aucun résultat</p> }
                { results && !isPending && <List content={results} /> }
            </Container>);
    }
}

function mapStateToProps(state) {
    return {listMovies: state.movies};
};

export default connect(mapStateToProps)(Movies);