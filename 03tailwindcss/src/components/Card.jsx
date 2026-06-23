import React from "react";

function Card(props) {
    console.log(props.username);
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://wallpapercave.com/wp/wp4563558.jpg"
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-medium">{props.username}</span>
        <span className="font-medium text-sky-500">React Learning</span>

        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2026</span>
        </span>
      </div>

    </div>
  );
}

export default Card;