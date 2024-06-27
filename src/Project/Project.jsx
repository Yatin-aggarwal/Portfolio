import project_Discription from "./Project_Discription.js";
import Project_Discription from "./Project_Discription.js";

function Project_Card(props){
    return(
        <div className="h-full grid grid-cols-3 border-2 border-solid rounded-2xl ">
            <div className="ps-1/10 pe-1/10 flex justify-center items-center text-amber-50 h-full bg-gradient-to-r from-cyan-500 to-blue-500  rounded-s-2xl" >
                {props.title}
            </div>
            <div className="col-span-2  rounded-2xl">
                <div className=" h-2/3 bg-blue-200 text-sm rounded-se-2xl ps-2% pt-1% ">

                    {props.content}
                </div>
                <div className="h-1/3 flex justify-center items-center gap-2/10">
                    <button type="button"
                            className="h-7/10 bg-blue-900 text-amber-50 w-1/3 rounded-2xl ">Demo

                    </button>
                    <button type="button"
                            className="h-7/10 bg-blue-900 text-amber-50 w-1/3 rounded-2xl">Github

                    </button>
                </div>
            </div>


        </div>
    )
}


function Project() {
    return (
        <>
            <div
                className=" h-1/10 pb-1% w-full ps-1/50 grid items-center justify-items-center font-bold text-2xl font-sans ">
                Recent Projects
            </div>
            <div className="h-8/10 grid grid-rows-3 gap-3">
                <div className="grid grid-cols-3 gap-5 ms-1/50 me-1/50">
                    <Project_Card{...project_Discription.Pixel_Prankster}/>
                    <Project_Card{...project_Discription.Sakura_trails}/>
                    <Project_Card{...project_Discription.Waifu_gan}/>
                </div>
                <div className="grid grid-cols-3 gap-5 ms-1/50 me-1/50">
                    <Project_Card{...Project_Discription.WGAN_GP}/>
                    <Project_Card{...project_Discription.Style_transfer}/>
                    <Project_Card{...project_Discription.Sucide_Watch}/>
                </div>
                <div className="grid grid-cols-3 gap-5 ms-1/50 me-1/50">
                    <Project_Card{...Project_Discription.Simple_Gan}/>
                    <Project_Card{...project_Discription.Titanic_Survival_Analysis}/>
                    <Project_Card{...project_Discription.Password_generator}/>
                </div>

            </div>
        </>
    )
}

export default Project