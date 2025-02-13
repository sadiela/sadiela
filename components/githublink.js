import React from "react";

export function ImageLink({image,link}) {
    return (
        <div style={{ display: 'inline-block', margin: '0 16px' }}>
        <a class="photolink" href={link} target="_blank" rel="noopener noreferrer"><img class="linkphoto" src={image} alt="No Image Found" style={{ width: 40 }} /></a>
        </div>
    );
  };
