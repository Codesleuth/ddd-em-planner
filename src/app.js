import ReactDOM from 'react-dom'
import App from './components/App'

export default function initApp () {
  ReactDOM.render(
    App(),
    document.getElementById('app')
  )
}
