const WelcomeMsg = ({ onGetPostClick }) => {
  return (
    <div className="welcome-msg" style={{ textAlign: 'center' }}>
      <h1>There are no posts right now</h1>
      <button type="button" onClick={onGetPostClick} className="btn btn-primary">
        Get posts from fetch
      </button>
    </div>
  );
};

export default WelcomeMsg;

