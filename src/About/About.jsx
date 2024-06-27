function  About(){
    return (
        <div className="h-9/10  grid grid-cols-2 ">
            <div className="grid justify-items-center mt-1/50">
                <img src={"src/About/Img.jpg"} className=" rounded-2xl h-9/10"/>
            </div>
            <div className=" mt-1/50 w-full ">
                <div className="w-full ">
                    <h1 className="text-3xl font-bold">Hello!</h1>
                </div>
                <div className="w-full text-3xl font-bold mb-1/50">
                    I'm Yatin.
                </div>
                <div>
                    I am a B.Tech student currently in my 4th semester, majoring in Computer Science and Engineering
                    from Guru Nanak Dev University. My journey in the tech world is driven by a passion for learning and
                    creating, and I am excited to share a bit about myself.
                </div>
                <h1 className="font-bold mb-2% mt-2%">
                    Web Development Enthusiast
                </h1>
                <div>
                    Web development has always fascinated me. From designing intuitive user interfaces to developing
                    robust back-end systems, I find joy in building web applications that solve real-world problems. My
                    projects often focus on combining aesthetic design with functional efficiency, ensuring a seamless
                    user experience.
                </div>
                <h1 className="font-bold mb-2% mt-2%">
                    Deep Learning Explorer
                </h1>
                <div>
                    The world of deep learning captivates me with its potential to revolutionize industries. I am
                    actively diving into neural networks, natural language processing, and computer vision, continuously
                    learning and experimenting with new techniques. My projects in deep learning aim to push the
                    boundaries of what machines can achieve, making them smarter and more adaptable.
                </div>
                <h1 className="font-bold mb-2% mt-2%">
                    Competitive Programmer
                </h1>
                <div>
                    Coding competitions are a significant part of my academic life. I regularly participate in contests
                    and challenges, which help me hone my problem-solving skills and think algorithmically. These
                    experiences not only sharpen my coding abilities but also teach me to perform under pressure and
                    collaborate effectively with peers.
                </div>


            </div>
        </div>
    )
}

export default About