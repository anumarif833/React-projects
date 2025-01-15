import { StrictMode, useState  } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'


// function favColor(){
  // const [color, setColor] = useState("");

//   return 
  // <h1>My fav fav Color</h1>

// };
 const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
