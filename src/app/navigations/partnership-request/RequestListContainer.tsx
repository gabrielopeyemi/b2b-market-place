"use client";
import RequestList from "./requestList";

export const RequestListContainer = () => {
    const list: JSX.Element[] = [];
    for (let i = 0; i < 9; i++) {
      list.push(<RequestList key={i} />);
    }
    return <div className="grid grid-cols-3 gap-y-10 gap-x-6">{list}</div>;
  };