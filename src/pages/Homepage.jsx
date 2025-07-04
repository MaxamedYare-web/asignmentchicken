import headerBg from "../assets/image 1.png";
import clogos from "../assets/div.tur-sponsor-slider.png";
import expImg from "../assets/ab1.png.png";
import checkImg from "../assets/check1.png";
import singnature from "../assets/sign.png";
import chickenBg from "../assets/checkenbg.jpg";
import fit1img from "../assets/ft1.jpg";
import fit2img from "../assets/ft2.jpg";
import callmanImg from "../assets/callmanImg.jpg";
import iconImg from "../assets/Icon.png";
import iconImg1 from "../assets/Icon (1).png";
import iconImg2 from "../assets/Icon (2).png";
import iconImg3 from "../assets/Icon (3).png";
import companyimg1 from "../assets/chickcompany1.jpg";
import companyimg2 from "../assets/chickcompany2.jpg";
import companyimg3 from "../assets/chickcompany3.jpg";
import agriculture from "../assets/agriculture-outline.png";
import healthicons from "../assets/healthicons_dairy.png";
import poultry from "../assets/poultry-leg.png";
import emojione_chicken from "../assets/emojione_chicken.png";
import fishicon from "../assets/fish.png";
import noto_poultry from "../assets/noto_poultry-leg.png";
import { MdOutlineMail, MdOutlineSlowMotionVideo } from "react-icons/md";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline, IoIosSend } from "react-icons/io";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
export const HomePage = () => {
  return (
    <>
      <section id="home">
        <div className="relative">
          <div
            className="h-screen bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${headerBg})` }}
          ></div>
        </div>
        {/* compay logs */}
        <div className="flex flex-col justify-center w-full  items-center  absolute z-10 -bottom-[23%]">
          <div className="rounded-full shadow-lg bg-white p-3">
            <img src={clogos} alt="" />
          </div>
        </div>
      </section>

      {/* 25 exp */}
      <div className="mt-26 flex justify-center pb-5">
        <div className="w-[1240px] md:flex items-end justify-between">
          <div className="flex flex-col items-center p-2 justify-center relative">
            <img src={expImg} alt="" />
            <div className="flex items-center justify-center absolute md:w-[430px] bg-white bottom-[0] z-10 expo shadow-[2px_2px_6px_1px_rgba(0,0,0,0.2)]  rounded-full p-4">
              <h1 className="text-5xl sm:text-[68px] mt-3 font-[600] text-[#FF6600] ">
                25
              </h1>
              <sup className="text-[14px] text-[#FF6600]">+</sup>
              <article className="flex flex-col leading-7 text-[#1976D3]">
                <small className="font-[14px] year">YEARS OF</small>
                <p className="text-5xl sm:text-[41px]">Experience</p>
              </article>
            </div>
          </div>
          {/* prag ex */}
          <div className="flex flex-col gap-10 p-5">
            <p className="max-w-[596.53px] text-[20px] text-[#494949] expo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor, aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 text-[20px] font-[600]">
              <div className="flex gap-2">
                <img src={checkImg} alt="" />
                <p> 100% Satifaction</p>
              </div>
              <div className="flex gap-2">
                <img src={checkImg} alt="" />
                <p> Flexible and Cost Effective</p>
              </div>
              <div className="flex gap-2">
                <img src={checkImg} alt="" />
                <p> Annual Pass Programs</p>
              </div>
              <div className="flex gap-2">
                <img src={checkImg} alt="" />
                <p> Trained emploies</p>
              </div>
            </div>
            <div className="flex gap-10">
              <img src={singnature} alt="" />
              <div className="text-start expo">
                <p className="text-[25px] font-[800]">Tom Henders</p>
                <p className="font-[500] text-[15px] text-[#494949]">
                  CEO of Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chicken section */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${chickenBg})` }}
      >
        <div className="sm:flex relative  p-4 items-center gap-5 justify-center ">
          {/* fit1 chciken */}

          <div className="flex relative justify-center">
            <div className="bg-[#7cc6f7] h-[75px] w-[75px] right-18 top-[-1%] z-0 animate-pulse duration-500 rounded-full absolute"></div>
            <div className="bg-white p-3 rounded-full absolute z-10 right-20 shadow ">
              <Popup
                className="text-4xl text-[#7cc6f7] rounded-full"
                trigger={
                  <button>
                    <MdOutlineSlowMotionVideo className="text-4xl text-[#7cc6f7]" />
                  </button>
                }
                position="left center"
              >
                {(close) => (
                  <div className="bg-white p-1 rounded md:w-[400px] -mt-10">
                    <iframe
                      width="400"
                      height="315"
                      src="https://www.youtube.com/embed/52tEs0j-4-0?si=LRqi7BPKbN09uFbm"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <a className="close flex justify-end" onClick={close}>
                      <IoIosCloseCircleOutline className="p-2 text-5xl text-[#7cc6f7]" />
                    </a>
                  </div>
                )}
              </Popup>
            </div>

            {/* call */}
            <div className="w-[367.78px]  absolute -bottom-3  lg:-left-60 sm:bottom-[0] rounded-full flex gap-4 items-center bg-[#7cc6f7] duration-500 hover:bg-white hover:text-[#7CC6F7] hover:shadow p-2">
              <img
                className="rounded-full w-[85px] h-[85px]"
                src={callmanImg}
                alt=""
              />
              <div className="expo">
                <small className="text-[13px] uppercase font-[500]">
                  Call Title
                </small>
                <p className="text-[20px] uppercase font-[800]">Phone number</p>
              </div>
            </div>
            <img
              className="duration-500 rounded-[10px]  border-10 rounded-t-[230px] hover:border-[#7CC6F7]   "
              src={fit2img}
              alt=""
            />
          </div>

          {/* fit2 chicken */}
          <div className="flex flex-col  mt-5">
            <div className="flex flex-col items-center gap-5">
              <img
                className="duration-500 rounded-[10px]  border-10 rounded-b-[140px] hover:border-[#7CC6F7]   "
                src={fit1img}
                alt=""
              />
              <p className="max-w-[384px] font-[800]">
                Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
                eiusmod tempor
              </p>
              <button className="bg-[#7CC6F7] font-[700] text-[15px] uppercase rounded-[4px] p-3 px-5 duration-500 hover:bg-white hover:shadow hover:text-[#7cc6f7]">
                More Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* plans chicken */}
      <div className="grid grid-cols-2  md:flex justify-center mt-30 p-4 items-center">
        {/* box 1 */}
        <div className="expo duration-500 rounded hover:bg-[#7cc6f7] hover:text-white flex flex-col justify-center items-center">
          <h1 className="font-[700] text-[26px] text-center">Lorem ipsum</h1>
          <p className="max-w-[226.60px] text-center text-[#666666]">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <div className="w-[160px] flex flex-col mt-5 items-center justify-center  ">
            <div className="rounded-b-[100px] flex items-center justify-center bg-white shadow border-t-4 border-t-[#7cc6f7] w-[160px] h-[150px]">
              <img src={iconImg} alt="" />
            </div>
            <h1 className="text-[60px] font-[800] text-center">01</h1>
          </div>
        </div>
        {/* box 2 */}
        <div className="expo duration-500 rounded hover:bg-[#7cc6f7] hover:text-white flex flex-col justify-center items-center">
          <div className="w-[160px] flex flex-col -mt-10 items-center justify-center  ">
            <h1 className="text-[60px] font-[800] text-center">02</h1>
            <div
              className="rounded-t-[100px] flex items-center justify-center
             bg-white shadow border-b-4 border-b-[#7cc6f7] w-[160px] h-[150px]"
            >
              <img src={iconImg1} alt="" />
            </div>
          </div>
          <h1 className="font-[700] text-[26px] text-center mt-5">
            Lorem ipsum
          </h1>
          <p className="max-w-[226.60px] text-center text-[#666666]">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        {/* box 3 */}
        <div className="expo duration-500  rounded hover:bg-[#7cc6f7] hover:text-white flex flex-col justify-center items-center">
          <h1 className="font-[700] text-[26px] text-center">Lorem ipsum</h1>
          <p className="max-w-[226.60px] text-center text-[#666666]">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <div className="w-[160px] flex flex-col mt-5 items-center justify-center  ">
            <div className="rounded-b-[100px] flex items-center justify-center bg-white shadow border-t-4 border-t-[#7cc6f7] w-[160px] h-[150px]">
              <img src={iconImg2} alt="" />
            </div>
            <h1 className="text-[60px] font-[800] text-center">03</h1>
          </div>
        </div>
        {/* box 4 */}
        <div className="expo duration-500 rounded hover:bg-[#7cc6f7] hover:text-white flex flex-col justify-center items-center">
          <div className="w-[160px] flex flex-col -mt-10 items-center justify-center  ">
            <h1 className="text-[60px] font-[800] text-center">04</h1>
            <div
              className="rounded-t-[100px] flex items-center justify-center
             bg-white shadow border-b-4 border-b-[#7cc6f7] w-[160px] h-[150px]"
            >
              <img src={iconImg3} alt="" />
            </div>
          </div>
          <h1 className="font-[700] text-[26px] text-center mt-5">
            Lorem ipsum
          </h1>
          <p className="max-w-[226.60px] text-center text-[#666666]">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      {/* our company */}
      <div className="bg-[#1976D3D9] mt-8 h-[600px] p-5 relative">
        <img
          className="absolute left-0 top-[60%] sm:left-[3%] animate-pulse duration-1000"
          src={agriculture}
          alt=""
        />
        <img
          className="absolute left-[25%] top-[10%] sm:top-[25%] sm:left-[15%] animate-pulse duration-2000"
          src={agriculture}
          alt=""
        />
        <img
          className="absolute right-0 bottom-0 p-4 animate-pulse duration-3000"
          src={noto_poultry}
          alt=""
        />
        <img
          className="absolute left-[30%] h-[70px] sm:h-[100px] sm:left-[50%] top-[25%] p-4 animate-pulse duration-4000"
          src={noto_poultry}
          alt=""
        />
        <img
          className="absolute right-[23%] top-[2%] animate-pulse duration-2000"
          src={fishicon}
          alt=""
        />
        <img
          className="absolute bottom-[3%] left-[0%] animate-pulse duration-2000"
          src={emojione_chicken}
          alt=""
        />
        <img
          className="absolute top-[15%] h-[70px] sm:h-[120px] right-[25%] sm:top-[25%] sm:right-[18%] animate-pulse duration-5000"
          src={emojione_chicken}
          alt=""
        />
        <img
          className="absolute h-[60px] sm:h-[110px] right-0 p-4 animate-pulse duration-6000"
          src={poultry}
          alt=""
        />
        <img
          className="absolute top-[23%] p-4 animate-pulse duration-7000"
          src={poultry}
          alt=""
        />
        <img
          className="absolute left-[10%] animate-pulse duration-8000"
          src={healthicons}
          alt=""
        />
        <img
          className="absolute right-[10%] top-[15%] z-0 animate-pulse duration-9000"
          src={healthicons}
          alt=""
        />

        <h1 className="text-center text-[25px] md:text-[50px] lg:text-[92px] font-[800] py-3 expo text-white">
          Our Company's
        </h1>
        <div className="space-y-2 mt-30 grid sm:space-y-0 md:grid-cols-2 lg:flex justify-center lg:px-20 gap-3 p-4">
          {/* company 1 */}
          <div className="">
            <img
              className="w-[522px] rounded-tl-[25px] h-[300px] duration-500 hover:scale-102"
              src={companyimg2}
              alt=""
            />
            <div className="expo bg-[#EEF3FF] py-7 p-4 relative rounded-b-2xl px-5">
              <div className="bg-[#FF6600]  absolute top-[-30%] w-[300px] flex items-center justify-center p-2 rounded-full">
                <CiLocationOn className="text-white text-2xl" />
                <p className="text-[15px] text-white">
                  {" "}
                  100 Sunrise Ct Hamel, Minnesota(MN)
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[25px] font-[700]">LOrem Ispums</h1>
                <button className="border-b-2 p-1 text-[20px] font-[400]">
                  Click here →
                </button>
              </div>
            </div>
          </div>
          {/* company 2 */}
          <div className="">
            <img
              className="w-[522px] h-[300px] duration-500 hover:scale-102"
              src={companyimg3}
              alt=""
            />
            <div className="expo bg-[#EEF3FF] py-7 p-4 relative rounded-b-2xl px-5">
              <div className="bg-[#FF6600] absolute top-[-30%] w-[300px] flex items-center justify-center p-2 rounded-full">
                <CiLocationOn className="text-white text-2xl" />
                <p className="text-[15px] text-white">
                  {" "}
                  100 Sunrise Ct Hamel, Minnesota(MN)
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[25px] font-[700]">LOrem Ispums</h1>
                <button className="border-b-2 p-1 text-[20px] font-[400]">
                  Click here →
                </button>
              </div>
            </div>
          </div>
          {/* company 3 */}
          <div className="">
            <img
              className="w-[522px] h-[300px] rounded-tr-[25px] duration-500 hover:scale-102"
              src={companyimg1}
              alt=""
            />
            <div className="expo bg-[#EEF3FF] py-7 relative rounded-b-2xl px-5">
              <div className="bg-[#FF6600] absolute top-[-30%] w-[300px] flex items-center justify-center p-2 rounded-full">
                <CiLocationOn className="text-white text-2xl" />
                <p className="text-[15px] text-white">
                  {" "}
                  100 Sunrise Ct Hamel, Minnesota(MN)
                </p>
              </div>
              <div className="flex justify-between  items-center">
                <h1 className="text-[25px] font-[700]">LOrem Ispums</h1>
                <button className="border-b-2 p-1 text-[20px] font-[400]">
                  Click here →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Dealership  */}
      <section id="dealership" className="p-5 duration-500 mt-220 md:mt-120 lg:mt-35">
        <h1 className="text-[48px] font-[700] text-center">Get Dealership </h1>
        <div className="flex justify-center mt-5">
          .
          <div className="bg-[#F5F1F0] space-y-4 lg:space-y-0 lg:flex  justify-center p-5">
            {/* contact */}
            <div className="p-5 pt-0 flex flex-col gap-20">
              <h2 className="max-w-[390px] text-[40px] popins ">
                Let’s discuss <br /> on something{" "}
                <span className="text-[#3C8BDA]">cool</span> together
              </h2>
              {/* main */}
              <div className="flex flex-col gap-25">
             {/* con phon */}
             <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-2">
                  <MdOutlineMail className="font-[500] text-[20px] text-[#1976D3]"/>
                  <h1 className="text-[20px] font-[500]">Loremispum@gmail.com</h1>
                </div>
                <div className="flex items-center px-3 shadow-[2px_3px_5px_rgba(0,0,0,0.4)] gap-2 bg-[#7BC6F7] p-2 rounded text-[20px] font-[500] popins">
                  <FaPhoneAlt />
                  <h1>+123 456 789</h1>
                </div>
                <div className="flex items-center gap-2">
                  <IoLocationSharp className="font-[500] text-[20px] text-[#1976D3]"/>
                  <h1 className="text-[20px] font-[500]">123 Street 456 House</h1>
                </div>
             </div>
                <div className="flex items-center gap-2">
                  <div className="text-white bg-[#1976D3] duration-700 hover:text-[#1976D3] hover:bg-white shadow rounded-full p-2 w-[64px] h-[64px] flex justify-center items-center text-[48px]">
                    <TiSocialFacebook />
                  </div>
                  <div className="text-white bg-[#1976D3] duration-700 hover:text-[#1976D3] hover:bg-white shadow rounded-full p-2 w-[64px] h-[64px] flex justify-center items-center text-[40px]">
                    <CiInstagram />
                  </div>
                  <div className="text-white bg-[#1976D3] duration-700 hover:text-[#1976D3] hover:bg-white shadow rounded-full p-2 w-[64px] h-[64px] flex justify-center items-center text-[40px]">
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="bg-white  p-5 rounded md:w-[500px] h-[600px]  relative">
              <h1 className="text-[20px] font-[500] text-[#2E0249] popins">I’m interested in...</h1>
              <div className="popins flex items-center mt-3 flex-wrap gap-3">
                <button className="rounded duration-500 hover:text-[#ffffff] hover:bg-[#7BC6F7] shadow text-[20px] font-[500] p-2 bg-[#7BC6F7] px-5">
                  Delership
                </button>
                <button className="rounded duration-500 hover:text-[#ffffff] hover:bg-[#7BC6F7] shadow text-[20px] font-[500] p-2 bg-[rgba(46,2,73,0.1)] px-5 text-[rgba(46,2,73,0.5)] border-2 border-[#2E02494D]">
                  asddcv f
                </button>
                <button className="rounded duration-500 hover:text-[#ffffff] hover:bg-[#7BC6F7] shadow text-[20px] font-[500] p-2 bg-[rgba(46,2,73,0.1)] px-5 text-[rgba(46,2,73,0.5)] border-2 border-[#2E02494D]">
                  gzdgdfgb
                </button>
                <button className="rounded duration-500 hover:text-[#ffffff] hover:bg-[#7BC6F7] shadow text-[20px] font-[500] p-2 bg-[rgba(46,2,73,0.1)] px-5 text-[rgba(46,2,73,0.5)] border-2 border-[#2E02494D]">
                  sdfsfsgsgs
                </button>
                <button className="rounded duration-500 hover:text-[#ffffff] hover:bg-[#7BC6F7] shadow text-[20px] font-[500] p-2 bg-[rgba(46,2,73,0.1)] px-2 text-[rgba(46,2,73,0.5)] border-2 border-[#2E02494D]">
                  Other
                </button>
              </div>
              <form className="flex flex-col gap-20 md:gap-40 mt-5">
                <div className="flex flex-col gap-5 ">
                  <input
                  required
                    type="text"
                   className="border-b-2 p-2 duration-500 outline-0 hover:border-[#7BC6F7]"
                    placeholder="You name"
                    
                  />
                  <input
                  required
                    type="text"
                  className="border-b-2 p-2 duration-500 outline-0 hover:border-[#7BC6F7]"
                    placeholder="Email"
                  />
                  <textarea required
                    type="text"
                    className="border-b-2 p-2 duration-500 outline-0 hover:border-[#7BC6F7]"
                    placeholder="Message"
                  />
                </div>

                <button className="text-[20px] duration-700 hover:text-[#1976D3]
                 hover:bg-[rgba(25,118,211,0.5)] shadow w-[250px] py-1 font-[500] text-center flex rounded items-center justify-center gap-3 px-4 bg-[#7BC6F7]">
                  <IoIosSend /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
