import React from 'react';
import PropTypes from 'prop-types';
import css from '../css/hud.module.scss';

const ScoreDisp = ({score,userAddress}) => {
    return (
        <div className={css.scoreDisp}>
            {userAddress}
            SCORE: {score}
        </div>
    )

};

ScoreDisp.propTypes = {
    score: PropTypes.number.isRequired,
};

export default ScoreDisp;
