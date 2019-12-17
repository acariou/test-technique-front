import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import List from '../components/List';
import { fetchMovies } from '../actions/ApiActions';
import { API_KEY, BASE_URL } from '../constants/Config';
import { Container } from '@material-ui/core';

class Movies extends Component {  
  
  constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
      const { dispatch }  = this.props;
      dispatch(fetchMovies(`${BASE_URL}discover/movie?primary_release_year=2019&api_key=${API_KEY}`));
    }

    render() {
        const { listMovies: { isPending, movies: { results } } } = this.props;

        return (
            <Container fixed>
                { isPending && <Loader type="Oval" color="#000" height={80} width={80} /> }
                { !results && !isPending && <p>Aucun résultat</p> }
                { results && !isPending && <List content={results} /> }
            </Container>);
    }
}

function mapStateToProps(state) {
    return {listMovies: state.movies};
};

export default connect(mapStateToProps)(Movies);