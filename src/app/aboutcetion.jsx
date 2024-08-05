import Image from "next/image";
import React from "react";
import rasm from "../../public/rasm.jpeg";

function aboutcetion() {
  return (
    <div className="grid grid-cols-12 container mx-auto">
      <div className="col-span-6">
        <Image src={rasm} />
      </div>

      <div className="col-span-6">
        <h2 className="font-bold text-2xl">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nisi
          et velit at alias quae doloribus reiciendis, expedita consequatur
          praesentium, dolore quam veniam molestias officiis. Quod, enim
          assumenda quae autem soluta nisi vitae aliquam odio cumque error
          necessitatibus ullam voluptate doloremque delectus possimus mollitia
          eligendi ipsum similique, excepturi harum temporibus?
        </p>
      </div>
    </div>
  );
}

export default aboutcetion;
