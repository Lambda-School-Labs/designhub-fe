<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
// import ImageWithComments from './ImageWithComments';
=======
import React, { useState } from 'react';
import ImageWithComments from './ImageWithComments';
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
import ProjectComments from './ProjectComments.js';
import defaultImage from '../../../ASSETS/default_thumbnail.svg';
import Loading from '../../../common/Loading';
import { Modal, useModal } from 'sriracha-ui';

<<<<<<< HEAD
const ImageViewer = ({ projectImg, userData, projectData }) => {
  const { isModal, toggleModal } = useModal();
  const [activeImg, setActiveImg] = useState(null);
  const [comments, setComments] = useState([]);
  const [modal, setModal] = useState(false);
  const changeImg = (imgObj) => {
=======
const ImageViewer = (props) => {
  const [activeImg, setActiveImg] = useState(null);
  const comments = [];
  const [modal, setModal] = useState(false);

  function changeImg(imgObj) {
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
    if (activeImg === null || activeImg.id !== imgObj.id) {
      setActiveImg(imgObj);
    }
    console.log('active', activeImg);
  };

  console.log('ImageVue', projectData);

  if (projectImg === null) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="ImageViewer">
          <main className="ImageViewer_body">
            <Modal active={isModal} toggle={toggleModal}>
              <img
                src={activeImg ? activeImg.url : projectData?.project?.mainImg}
                alt="big boy"
              />
            </Modal>
            <div className="main-image-container">
              <section className="ImageViewer__main-image">
                {!projectData?.project?.mainImg ? (
                  <img
                    src={defaultImage}
                    alt="main project"
                    style={{ cursor: 'default' }}
                    className="main-image"
                  />
                ) : (
                  <img
                    src={
                      activeImg ? activeImg.url : projectData?.project?.mainImg
                    }
                    alt="main project"
                    onClick={toggleModal}
                    className="main-image"
                    style={{ maxWidth: '900px' }}
                  />
                )}
              </section>
              <section className="ImageViewer__thumbnails">
                {projectData?.project?.photos.map((t) => (
                  <img
                    src={t.url}
                    key={t.id}
                    alt="project-thumbnail"
                    onClick={() => changeImg(t)}
                    className="thumbnails"
                    style={{ maxWidth: '200px' }}
                  />
                ))}
              </section>
            </div>
          </main>
        </div>
        <ProjectComments comments={projectData?.project?.comments} />
      </>
    );
  }
};

export default ImageViewer;
