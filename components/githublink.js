import React from "react";

export function ImageLink({image,link, width}) {
    return (
        <a class="photolink" href={link} target="_blank" rel="noopener noreferrer"><img class="linkphoto" src={image} alt="No Image Found" style={{ width: width}} /></a>
    );
  };


  /*         <div style={{ display: 'inline-block', margin: '0 16px', textAlign:'center', alignItems:"center" }}></div>
*/