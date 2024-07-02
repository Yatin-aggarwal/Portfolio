function  Home(){
    return (
        <div className="w-full grid grid-rows-3 h-9/10  ">
            <div className="  w-full grid row-start-1  row-span-2  content-center pt-1/10 ">
                <div className="grid grid-cols-11">
                    <div className="col-start-4 col-span-6">
                        <div className=" w-full">
                            &mdash;&mdash;  HELLO
                        </div>
                        <div className="  w-full text-6xl font-semibold pb-2%">
                            I'm <span className="text-rose-600">Yatin</span> Aggarwal
                        </div>
                        <div className="w-full pb-1/50">
                            This is Yatin Aggarwal Deep Learning Enthusiast, Web Developer and Competitive Programmer.
                        </div>
                        <a href="https://onedrive.live.com/download?resid=869675663ADDBE%21779&authkey=!AGpJM7E_l1-oT7I&em=2">
                            <button className=" bg-rose-600 p-1% text-amber-50 hover:bg-rose-700">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row-start-3 h-full flex ps-3% gap-1% pt-1/10">
                <a href="https://github.com/Yatin-aggarwal"><img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    height="24" width="24"/></a>
                <a href="https://www.linkedin.com/in/yatin-aggarwal-80291a257/"><img
                    src="https://cdn-icons-png.freepik.com/256/15707/15707782.png?semt=ais_hybrid"
                    height="24" width="24"/></a>
                <a href="https://leetcode.com/u/Yatin_aggarwal/"><img
                    src="https://assets.leetcode.com/static_assets/public/icons/favicon-32x32.png"
                    height="24" width="24"/></a>
                <a href="https://www.kaggle.com/yatinaggarwal033"><img
                    src="https://www.kaggle.com/static/images/favicon.ico" height="24" width="24"/></a>
            </div>

        </div>
    )
}

export default Home