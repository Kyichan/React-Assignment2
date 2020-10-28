import React from 'react';

const AlbumList = props => {
  const showList = ({ albumList }) => {
    //console.log(albumList);
    if (albumList) {
      return albumList.map((item, index) => {
        return(
          <div className="album_detail">
          <h3>{item.title}</h3>  
          <img width="100%" key={index} src={`/images/albums/${item.cover}.jpg`} />
          <h4>Price - ${item.price}</h4>
          </div>
        );        
        
      });
    }
  }; 
  return <div className="albums_list">{showList(props)}</div>;
};

export default AlbumList;
