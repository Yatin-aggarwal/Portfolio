import Project_Discription from "./Project_Discription.js";
import {useState} from "react";

function Project_Card(props){
    return<>
        <div
            className={`z-50 block group flex flex-col h-full w-full ${props.gradient} md:bg-white sm:bg-pink-500 shadow-sm shadow-gray-500 border-t border-gray-500 mb-1% rounded-2xl `}>
            <div className=" h-1/6 w-full  flex justify-end pb-1/10">
                <div
                    className={`md:${props.gradient_start}  group-hover:bg-transparent  text-white text-2xl font-extrabold w-1/3 flex justify-center items-center  rounded-tr-2xl rounded-bl-2xl  `}>
                    {1}
                </div>
            </div>
            <div
                className=" w-full flex justify-center  hover:text-white sm:text-white md:text-black text-2xl font-semibold group-hover:text-white">
                {props.title}
            </div>
            <div className="pl-2% pt-3% w-full  flex justify-center  group-hover:text-white sm:text-white md:text-black ">
                {props.content}
            </div>
            <div className="h-full flex justify-center items-end pb-6%">
                <div className=" sm:pt-1/10    ">
                    <a className=" sm:bg-black rounded-3xl sm:text-white py-1/10 px-2/10  group-hover:bg-white group-hover:text-black  " href={props.github}>
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>

    </>
}


function Project() {
    return (
        <>
            <div
                className=" h-1/10 pb-0.5% w-full ps-1/50 grid items-center justify-items-center font-bold text-3xl font-sans">
               <div>Recent Projects</div>
            </div>
            <div
                className=" overflow-scroll grid sm:ml-6% md:ml-0.5%  md:grid-cols-6 w-full sm:h-full gap-1 sm:px-2%    h-full ">
                <div className=" md:w-full md:h-full relative sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Pixel_Prompt}/></div>
                <div className=" md:w-full md:h-full   sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Sky_Watch}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Color_World}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Pixel_Prankster}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Waifu_gan}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Sakura_trails}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.WGAN_GP}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Style_transfer}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Simple_Gan}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Sucide_Watch}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Titanic_Survival_Analysis}/></div>
                <div className=" md:w-full md:h-full  sm:w-80 sm:h-96 ">
                    <Project_Card{...Project_Discription.Password_generator}/></div>


            </div>
        </>
    )
}

export default Project