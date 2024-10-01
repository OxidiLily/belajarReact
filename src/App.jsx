import Welcome from './assets/component/welcome'
import Content from './assets/component/content'
import Footer from './assets/component/footer'
import './index.css'

function App() {
  return (
    <>
    <div className='bg-gray-900 mx-auto my-auto'>
      <Welcome/>
      <Content/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
