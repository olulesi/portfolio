import React from 'react'
import Tilt from 'react-parallax-tilt'
import { FingerprintSpinner } from 'react-epic-spinners'

function App() {

  return (
    <>
    <section>
        <Tilt>
          <div className="construction-card">
            <div>
              <span>Currently Under Construction</span>
              <FingerprintSpinner
	      color='#000000'
	      size='200'
	      />
            </div>
          </div>
        </Tilt>
        
      </section>   
    </>
  )


}
export default App