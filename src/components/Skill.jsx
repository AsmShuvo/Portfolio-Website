const Skill = ({ skill, icon, color,  text }) => {
    return (
        <div>
            <div class="m-3">
                <button
                    class={` w-32 lg:w-44 lg:h-14 ${text} transition duration-500  hover:text-white tracking-wide font-bold rounded border-b-4 border-r-2 hover:scale-105 ${color}  shadow-md shadow-gray-700 py-2 px-6 inline-flex items-center`}>
                    {icon}
                    <span class="mx-auto">{skill}</span>
                </button>
            </div>
        </div>
    );
};

export default Skill;