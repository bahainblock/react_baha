import React from "react";


const Sitebar = (props) => {
    let friends = props.friends;

    let friendsItem = friends.map((friends, index) => <div key={index}> {friends.name} </div>);

    return (
        <div>
            {friendsItem}
        </div>
    );
}


export default Sitebar;