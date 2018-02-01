import { React } from 'react';
import { PropTypes } from 'prop-types';

function PlayerPreview({ avatar, username, children }) {
    return (
        <div>
            <div className="column">
                <img
                    className="avatar"
                    src={avatar}
                    alt={'Avatar for ' + username}
                />
                <h2 className="username">@{username}</h2>
                {children}
            </div>
        </div>
    );
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}

export default PlayerPreview