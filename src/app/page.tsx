#! usr/bin/env node

import Image from "next/image"
import Rpcard from "@/component/rpcard"
import Fcard from "@/component/fcard"

export default function Home()
{
  return(
    <main>
      <div className="main-hero">
          <div className="hero-section">
              <div className="hero-text">
                <h1 className="hero-heading">Hi, I am John, Creative Technologist</h1>
                <p className="hero-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="hero-button">Download Resume</button>
              </div>
              <div className="hero-image"> 
                <Image src="/hero-image.png" width={292} height={299} alt="John Image" /> 
              </div>
          </div>
            
      </div>

      <div id = "works" className="rp-main">
        <div className="rp-section">
            <div className="rp-text">
              <h2 className="rp-heading">Recent Post</h2>
              <button className="rp-button">View all</button>
            </div>
            <div rpcard-container>
              <div><Rpcard /></div>
              <div><Rpcard /></div>
            </div>
        </div>
      </div>

      <div id="Blog" className="main-fw">
          <div className="fw-containers">
            <div className="fw-1">
              <Image src="/Rectangle-30.png" width={246} height={180} alt="Featured Work Image" />
              <Fcard />
            </div>
            <div className="fw-2">
              <Image src="/Rectangle-32.png" width={246} height={180} alt="Featured Work Image" />
              <Fcard />
            </div>
            <div className="fw-3">
              <Image src="/Rectangle-34.png" width={246} height={180} alt="Featured Work Image" />
              <Fcard />
            </div>
          </div>
      </div>
    </main>
  )
  
}