import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({movieResults, tvResults, loading, handleSubmit, error, SearchTerm}) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    SearchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}

export default SearchPresenter;