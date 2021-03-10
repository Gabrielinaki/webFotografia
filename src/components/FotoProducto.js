// import React, { Component } from "react";
// import GalleryImage from "../../img/productoArray";
// import GalleryModal from "../../img/modal";

// import image1 from "../../img/producto/01_20Agustina_20Parra.jpg";
// import image2 from "../../img/producto/Agustina Parra 02 sRGB.jpeg";
// import image3 from "../../img/producto/IMG_5147.PNG";
// import image4 from "../../img/producto/IMG_6655.JPG";
// import image5 from "../../img/producto/5000bf99-1ac0-41fe-8fc1-2b9431379971.jpg";
// import image6 from "../../img/producto/IMG_7171.jpg";

// let imgUrls = [image1, image2, image3, image4, image5, image6];

// export default class Gallery extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOpen: false,
//       url: "",
//     };
//   }

//   render() {
//     return (
//       <>
//         <main role="main" className="flex-shrink-0 mt-05">
//           <div className="album py-5 bg-transparent">
//             <div className="container">
//               <div className="row">
//                 {imgUrls.map((url, index) => {
//                   return (
//                     <div className="col-md-4">
//                       <div key={index} className="card mb-4 shadow-sm">
//                         <span onClick={(e) => this.openModal(url)}>
//                           <GalleryImage
//                             className="img-thumbnail"
//                             src={url}
//                             alt={"Image number " + (index + 1)}
//                           />
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <GalleryModal
//                 show={this.state.isOpen}
//                 onClick={this.closeModal}
//                 src={this.state.url}
//               />
//             </div>
//           </div>
//         </main>
//       </>
//     );
//   }

//   // Function for opening modal dialog
//   // I change the function to a arrow functions to avoid to declare the binding in the constructor
//   openModal = (url) => {
//     this.setState({
//       isOpen: true,
//       url: url,
//     });
//   };

//   // Function for closing modal dialog
//   // I change the function to a arrow functions to avoid to declare the binding in the constructor
//   closeModal = () => {
//     this.setState({
//       isOpen: false,
//       url: "",
//     });
//   };
// }
