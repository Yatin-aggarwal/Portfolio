import Project_Discription from "./Project_Discription.js";

function Project_Card(props){
    return(
        <div className="h-full grid grid-cols-4 border-2 border-solid rounded-2xl ">
            <div className="ps-1/10 pe-1/10 flex justify-center items-center text-amber-50 h-full bg-gradient-to-r from-cyan-500 to-blue-500  rounded-s-2xl" >
                {props.title}
            </div>
            <div className="col-span-3  rounded-2xl">
                <div className=" lg:h-3/4 bg-blue-200   rounded-se-2xl ps-2% pt-2% pe-2% md:h-4/5 ">
                   <div className=" lg:text-sm  md:text-xs "> {props.content}</div>
                </div>
                <div className="lg:h-1/4 flex justify-center items-center gap-2/10 md:h-1/5">
                    <a className="w-1/4 h-7/10 md:h-3/4" href={props.github}>
                        <button type="button"
                                className=" h-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br w-full rounded-xl md:text-sm">Github

                        </button>
                    </a>
                    <a className="w-1/4 h-7/10 md:h-3/4" href={props.demo}>
                        <button type="button"
                                className=" h-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br w-full rounded-xl md:text-sm">Results

                        </button>
                    </a>
                </div>
            </div>


        </div>
    )
}


function Project() {
    return (
        <>
            <div
                className=" h-1/10 pb-0.5% w-full ps-1/50 grid items-center justify-items-center font-bold text-xl font-sans">
                Recent Projects
            </div>
            <div className="h-8/10 grid grid-rows-3 gap-1%">
                <div className="grid grid-cols-3 gap-2% md:ms-1% md:me-1% md:gap-0.5%">
                    <Project_Card{...Project_Discription.Pixel_Prankster}/>
                    <Project_Card{...Project_Discription.Sakura_trails}/>
                    <Project_Card{...Project_Discription.Waifu_gan}/>
                </div>
                <div className="grid grid-cols-3 gap-2% md:ms-1% md:me-1% md:gap-0.5%">
                    <Project_Card{...Project_Discription.WGAN_GP}/>
                    <Project_Card{...Project_Discription.Style_transfer}/>
                    <Project_Card{...Project_Discription.Sucide_Watch}/>
                </div>
                <div className="grid grid-cols-3 gap-2% md:ms-1% md:me-1% md:gap-0.5%">
                    <Project_Card{...Project_Discription.Simple_Gan}/>
                    <Project_Card{...Project_Discription.Titanic_Survival_Analysis}/>
                    <Project_Card{...Project_Discription.Password_generator}/>
                </div>

            </div>
        </>
    )
}

export default Project