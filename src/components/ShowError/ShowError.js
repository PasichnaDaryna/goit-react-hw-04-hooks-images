import PropTypes from 'prop-types';
import errorImage from './error.jpg';
import './ShowError.css';

function ErrorView({ texterror }) {
  return (
    <div role="alert" className="wrapper">
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={texterror} className="text">
        {texterror}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;
