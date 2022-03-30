import React from "react";
const user = {
    name: 'Ahmed Ali',
    imageUrl: 'https://avatars.githubusercontent.com/u/52359086?v=4',
    imageSize: 90,
  };
  
  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
  export default Profile;