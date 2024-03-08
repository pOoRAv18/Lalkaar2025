import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.css';
import lalkaarpic from './lalkaartoppic.png';


function HomeSlider() {
  return (
    <>
      <OwlCarousel
        id="home-slider"
        className="owl-theme home-slider active"
        loop
        items={1}
        animateIn="fadeIn"
        animateOut="fadeOut"
        autoplay
      >
        <div id="home-slider-item-1" className="home-slider-item js-fullheight">
          <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative',display:"flex",alignItems:"center",justifyContent:"center"  }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5" style={{width:"78vw"}}>
                <div id="row" className="">
                  
                  <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
            
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Lalkaar&nbsp;2024
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  NIT , Hamirpur
                </h2>
                <div id="rowM" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                
                </h2>
                
                  
                
                
                  
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-2" className="home-slider-item js-fullheight">
        <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative',display:"flex",alignItems:"center",justifyContent:"center"  }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5" style={{width:"78vw"}}>
                <div id="row" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Lalkaar&nbsp;2024
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  NIT , Hamirpur
                </h2>
                <div id="rowM" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />

                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                
                </h2>
                
                  
                
                
                  
              </div>
            </div>
          </div>
          </div>
        <div id="home-slider-item-3" className="home-slider-item js-fullheight">
        <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative',display:"flex",alignItems:"center",justifyContent:"center"  }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5" style={{width:"78vw"}}>
                <div id="row" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Lalkaar&nbsp;2024
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  NIT , Hamirpur
                </h2>
                <div id="rowM" className="">
                  
                  <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                  
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                
                </h2>
                
                  
                
                
                  
              </div>
            </div>
          </div>
        </div>
        <div id="home-slider-item-4" className="home-slider-item js-fullheight">
        <div className="home-overlay"></div>
          <div className="container" style={{ position: 'relative',display:"flex",alignItems:"center",justifyContent:"center"  }}>
            <div
              className="row home-slider-text js-fullheight justify-content-center align-items-center home-spardha-mainlogo"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 col-12 ftco-animate text-center mt-5" style={{width:"78vw"}}>
                <div id="row" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                </div>
                <h1 className="mb-1 text-overflow-center spardha-21">
                  Lalkaar&nbsp;2024
                </h1>
                <h2 className="text-overflow-center home-spardha-subheading">
                  NIT , Hamirpur
                </h2>
                <div id="rowM" className="">
                <img id="columnLogo" src={lalkaarpic} alt="lalkaar" />
                </div>
                <h2
                  className="text-overflow-center home-spardha-subheading"
                  style={{ color: '#fdcc07' }}
                >
                
                </h2>
                
                  
                
                
                  
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default HomeSlider;
