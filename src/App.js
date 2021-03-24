import React from "react";

import Form from "./Components/Form";
import Img from "./Components/Img";

function App(){
    return (
        <div className="lg:grid lg:grid-cols-2">
            <div className="lg:flex lg:items-center md:hidden lg:px-20">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iste vitae id cupiditate doloribus. Fugit porro aliquid sint ut obcaecati quo, expedita repellendus dolore eos, ea fugiat explicabo odit temporibus vero nemo, id cupiditate tempora delectus qui suscipit natus blanditiis perspiciatis maiores quos. Eum facere cumque, perferendis nam provident in dignissimos labore dolorem consectetur accusantium consequatur? Architecto commodi labore praesentium distinctio quisquam quidem necessitatibus voluptates veritatis pariatur exercitationem fuga eligendi quod, reiciendis, sapiente sit! Nihil commodi, qui laudantium consequuntur, sit voluptate expedita ipsum in aut ducimus provident nulla soluta. Dicta repudiandae sed ut omnis a corporis.
                </p>
            </div>
            <div className="flex flex-col items-center sm:mx-16 lg:mx-32 py-10">
                <Img src="https://cdn.onlinewebfonts.com/svg/img_401900.png" className="w-16 mt-10" alt="User"/>
                <Form className="bg-transparent lg:px-10 pt-6 rounded-b-lg" />
            </div>
        </div>
    )

}

//  className="flex justify-center w-full h-full absolute items-center"

export default App;