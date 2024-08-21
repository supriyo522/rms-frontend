import React from 'react'

function Footer() {
  return (
    <div>
         <footer className='mt-3'>
        <div class="container ">
          <div class="row py-5">
          <div class="col-md-1 col-sm-12 "></div>
            <div class="col-md-2 col-sm-12 ">
              <p >
                <h5> About Us </h5>
              </p>
              <ul className="mt-3 footer-links">
                <li>
                  <a href="about" class="footer-lists" id="aboutUs-footerLink" >
                    Blog
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="design"
                    class="footer-lists"
                    id="contributor-footerLink"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="contact"
                    class="footer-lists"
                    id="careers-footerLink"
                  >
                    Jobs
                  </a>
                </li>
                <li className="mt-3">
                  <a href="/" class="footer-lists" id="blog-footerLink">
                    Post a Job
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-12">
              <p>
                <h5> Site Links</h5>
              </p>
              <ul className="mt-3 footer-links">
                <li>
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                    Blog
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="design"
                    class="footer-lists"
                    id="contributor-footerLink"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="contact"
                    class="footer-lists"
                    id="careers-footerLink"
                  >
                    Jobs
                  </a>
                </li>
                <li className="mt-3">
                  <a href="/" class="footer-lists" id="blog-footerLink">
                    Post a Job
                  </a>
                </li>
              </ul>
             
            </div>
            <div class="col-md-2 col-sm-12 ">
              <p>
               
                <h5> Popular Cities</h5>
              </p>
              <ul className="mt-3 footer-links">
                <li>
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                    Mumbai
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="design"
                    class="footer-lists"
                    id="contributor-footerLink"
                  >
                   Delhi
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="contact"
                    class="footer-lists"
                    id="careers-footerLink"
                  >
                   Bengalore
                  </a>
                </li>
                <li className="mt-3">
                  <a href="/" class="footer-lists" id="blog-footerLink">
                   Kolkata
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-12 ">
              <p>
                <h5>Contact Us</h5>
                <ul className="mt-3 footer-links">
                <li className="mt-3">
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                   India
                  </a>
                </li>
                <li className="mt-3">
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                  +188 2564239
                  </a>
                </li>
                <li className="mt-3">
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                  +188 2564239
                  </a>
                </li>
                <li className="mt-3">
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                   rms@citimart.com
                  </a>
                </li>
                </ul>
              </p>
            </div>
            <div class="col-md-2 col-sm-12 ">
              <p>
               
                <h5> Resources</h5>
              </p>
              <ul className="mt-3 footer-links">
                <li>
                  <a href="about" class="footer-lists" id="aboutUs-footerLink">
                    FAQ's
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="design"
                    class="footer-lists"
                    id="contributor-footerLink"
                  >
                   HOW it WORK
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href="contact"
                    class="footer-lists"
                    id="careers-footerLink"
                  >
                   MemberShip
                  </a>
                </li>

                <li className="mt-3">
                <a href="https://twitter.com/Indianwebsitein" >
                <i class="fa fa-twitter custom-icon"></i>
              </a>&nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/company/indianwebservice/"
                
              >
               
                <i class="fa fa-linkedin custom-icon"></i>
              </a>&nbsp;&nbsp;
              <a
                href="https://www.facebook.com/people/Indian-Web-Service/61553942327921/"
                
              >
                
                <i class="fa fa-facebook-square custom-icon"></i>
              </a>&nbsp;&nbsp;
              <a
                href="https://www.instagram.com/indianwebservice/"
                
              >
               
                <i class="fa fa-instagram custom-icon"></i>
              </a>
              {/* <a
                href="https://www.youtube.com/channel/UCichKUA853CbwscVUo6mHsA"
                
              >
                <i class="fa fa-youtube-play custom-icon"></i>
              </a> */}
                </li>
              </ul>
            </div>
           

            <div class="col-md-12 py-5 text-center">
              <span class=" text-current text-white">
                © 2024 All Right Reserved
                <a
                  class="text-gray-700"
                  href="https://indianwebservice.com/"
                  
                  rel="noopener noreferrer"
                >
                  &nbsp;rms.com
                </a>
              </span>
            </div>
          </div>
        </div>
        </footer>
      
    </div>
  )
}

export default Footer
