import './index.css'

const NotFound = () => (
  <div className="not-found-box">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-h1">Page Not Found</h1>
    <p className="not-found-p">
      We are sorry, the page you requested not be found{' '}
    </p>
  </div>
)

export default NotFound
