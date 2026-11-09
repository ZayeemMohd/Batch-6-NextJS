"use client";
import { useState, useEffect } from "react";

export default function RestaurantPage() {
  const [data, setData] = useState(null);
  const [time , setTime] = useState(null)

  useEffect(() => {
    setTime(Date.now())
  }, []);

  function buttonHandler() {
    setData("Hello world");
  }

  return (
    <div>
      {time !== null ? <p>Time: {time}</p> : <p>time loading...</p>}
      RestaurantPage
      <button onClick={buttonHandler}>CLICK ME</button>
      {data !== null ? <p>{data}</p> : <p></p>}
    </div>
  );
}
