import React from "react";
import ModalImage from "../modal";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";

export default function Gallery() {
    const [allImages, setAllImages] = React.useState([]);

    if (allImages.length < 23){
        for (let i = 0; i < 10; i++){
            const list = allImages.concat(<ModalImage src={img2}/>);
            setAllImages(list);
        }
    }

  return (
    <div className="gallery">

        <ModalImage src={img1}/>
        <ModalImage src={img2}/>
        <ModalImage src={img3}/>

        {/* <ul className="all-gallery-images">
            {allImages.map((modalImg) => (
                <li className="gallery-image" key={modalImg.src}>{modalImg}</li>
            ))}
        </ul> */}

    </div>
  );
}