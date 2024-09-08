import React from 'react'
import { Link } from 'react-router-dom';
import { SUBMIT } from '../constants/Assets'

const Submit = () => {
  return (
    <section
      id="submit"
      className=" bg-main-3 py-[70px] lg:px-[100px] px-[20px]  "
    >
      <br />
      <div className="flex justify-evenly">
        {SUBMIT.map((m) => (
          <Link to={m.href}>
            <img
              className="flexCenter size-80 p-5 rounded-md "
              src={m.src}
              alt=""
              width={200}
              height={200}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Submit
