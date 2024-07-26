import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Gallery_gradient.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GalleryModal from '../GalleryModal/GalleryModal';
// import Background_gallery from '/images/bg/bg_football.png';

const Gallery = () => {
  // const gallery_bg={
  //     backgroundImage:  "url(" + { Background_gallery } + ")",
  //     backgroundAttachment: "fixed",
  //     backgroundPosition: "center",
  //     backgroundSize: "cover"
  // }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [item, setItem] = useState(0);
  // const changeIndex=(index)=>{
  //   console.log("changeIndex",index);
  //   setItem(index)
  // };
  const [check, setCheck] = useState(false);

  useEffect(() => {
    // console.log('useEffect', check);
    if (check) {
      if (!modal) {
        toggle();
      }
      setItem(localStorage.getItem('index'));
      setCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <>
      <section id="gallery" className="ftco-section padSect">
        <div className="container_gallery gallery-container mb-5 pt-1">
          <div className="row_gallery justify-content-center pt-5">
            <div className="col-md-7 heading-section_gallery text-center">
              <h3
                className="subheading_gallery"
                style={{ color: '#6B0103', fontWeight: '900' }}
              >
                Some Past Memories
              </h3>
              <h2 className="mb-1" style={{ fontWeight: '900' }}>
                Gallery
              </h2>
            </div>
          </div>
          {/* <hr style="margin-left: 30px; margin-right: 30px;"> */}
          <div className="tz-gallery">
            <div className="row_gallery mb-3 gallery-heading boldClass">
              Opening Ceremony:
            </div>

            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 0);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening1.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 1);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening2.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 2);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening3.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 3);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening4.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 4);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening5.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 7);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening6.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 6);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening7.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 7);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening8.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 8);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening9.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 9);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/opening10.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              
            </div>
            
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Closing Ceremony:
            </div>
            <div className="row_gallery">
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 18);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/22.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 19);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/closing1.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 20);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/24.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/closing2.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/closing3.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/closing4.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/closing5.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 22);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/26.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Events:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 23);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports1.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 24);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports2.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 24);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports3.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
           
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports4.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports5.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports6.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports7.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports8.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports9.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports10.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports11.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sporst12.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports13.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports14.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports15.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports16.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/sports/sports17.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
           
            
           
           
            
           
           
           
           
           
            
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        contentClassName="height_gallery"
        size="lg"
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            selectedItem={item}
            className="carousel_gallery"
          >
            <div>
              <img
                src="/gallery/images/opening/opening1.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/opening2.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/opening3.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/opening4.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/opening5.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports1.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports2.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports3.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports4.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports5.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports6.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports7.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports8.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports9.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports10.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports11.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports12.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports13.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports14.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports15.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports16.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/sports/sports17.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            
          </Carousel>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Gallery;
