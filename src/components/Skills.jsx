import Skill from './Skill';
import { FaCode, FaCopy, FaCopyright, FaGithubSquare, FaHtml5, FaJava, FaPaintBrush } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { PiBracketsCurly } from 'react-icons/pi';
const Skills = () => {
    return (
        <>
            <div className='pt-6 bg-black'>
                <div className='flex flex-col min-h-screen justify-center gap-6 items-center'>
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>                    <div className='grid  grid-cols-2 md:grid-cols-5'>
                        <Skill text={"text-blue-400"} color={"border-blue-500"} skill={"HTML"} icon={<FaHtml5 />} />
                        <Skill text={"text-blue-400"} color={"border-blue-500"} skill={"CSS"} icon={<FaCss3Alt />} />
                        <Skill text={"text-blue-400"} color={"border-blue-500"} skill={"React"} icon={<RiReactjsFill />} />
                        <Skill text={"text-blue-400"} color={"border-blue-500"} skill={"NextJs"} icon={<TbBrandNextjs />} />
                        <Skill text={"text-blue-400"} color={"border-blue-500"} skill={"Express"} icon={<SiExpress />} />
                    </div>
                    <div className=' grid  grid-cols-2 md:grid-cols-4'>
                        <Skill text={"text-green-600"} color={"border-green-700"} skill={"Javascript"} icon={<IoLogoJavascript />} />
                        <Skill text={"text-green-600"} color={"border-green-700"} skill={"Java"} icon={<FaJava />} />
                        <Skill text={"text-green-600"} color={"border-green-700"} skill={"C"} icon={<PiBracketsCurly />} />
                        <Skill text={"text-green-600"} color={"border-green-700"} skill={"C++"} icon={<FaCode />} />

                    </div>
                    <div className=' grid  grid-cols-2 md:grid-cols-2'>
                        <Skill text={"text-pink-300"} color={"border-pink-400"} skill={"MySQL"} icon={<GrMysql />} />
                        <Skill text={"text-pink-300"} color={"border-pink-400"} skill={"MongoDB"} icon={<SiMongodb />} />
                    </div>
                    <div className=' grid  grid-cols-2 lg:grid-cols-1'>
                        <Skill text={"text-rose-400"} color={"border-rose-500"} skill={"TailwindCSS"} icon={<RiTailwindCssFill />} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;