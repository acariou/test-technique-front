import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getMovie } from '../actions/ApiActions';
import Loader from 'react-loader-spinner';
import { IMG_URL } from '../constants/Config';
import { 
    Container,
    Grid,
    Typography, 
    // ButtonBase, 
} from '@material-ui/core';
import CircularChart from '../components/CircularChart';
import './Movie.css';

class Movie extends Component {

    componentDidMount() {
        const { dispatch, match: { params: { ref } } } = this.props;
        if (ref !== null && ref !== undefined) {
            const id = ref;
            dispatch(getMovie(id));
        }
    }

    render() {
        const { detail, isPending } = this.props;
        
        return (
            <Container fixed className="movie">
                { isPending && <Loader type="Oval" color="#000" height={80} width={80} /> }
                { !isPending && detail && <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <figure className="image">
                                <img className="img" src={`${IMG_URL}${detail.poster_path}`} alt="" />
                            </figure>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h2" gutterBottom>
                                {detail.title}
                            </Typography>
                            <CircularChart ranking={parseInt(detail.vote_average * 10, 10)} />
                            <Typography variant="body2" gutterBottom>
                                {detail.release_date}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {detail.overview}
                            </Typography>
                        </Grid>
                    </Grid> }
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return state.movie;
};

export default withRouter(connect(mapStateToProps)(Movie));