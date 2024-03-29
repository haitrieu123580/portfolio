import React from 'react'
import { LuGraduationCap } from "react-icons/lu";

const VerticalTimeLineComponent = (props: any) => {
    const { title, location, description, icon, date, isReverse } = props;
    return (
        <div className={`element relative my-8 !mb-0 md:my-16 after:table after:clear-both`}>
            <span className='icon bg-white dark:bg-slate-600 visible  absolute top-0 left-0 w-10 h-10 rounded-[50%] border-4 flex justify-center items-center md:w-[60px] md:h-[60px] md:left-1/2 md:ml-[-30px] box-border'>
                {icon}
            </span>
            <div className={`content relative min-h-[1px] visible ml-[60px] rounded p-4 md:ml-0 md:w-[44%] text-left md:py-5 md:px-8 bg-white  dark:bg-white/10 ${isReverse ? "float-right" : ""}`}>
                <div className={`absolute right-full h-0 w-0  md:top-6 md:left-full rotate-180 border-r-4 ${isReverse ? "rotate-0  !left-auto" : ""}`}>

                </div>
                <h3 className='font-semibold capitalize'>
                    {title}
                </h3>
                <p className='font-normal !mt-0'>{location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{description}</p>
                {isReverse ?
                    <>
                        <span className={`inline-block  py-3 opacity-70  md:absolute md:w-full md:top-2 md:left-auto md:right-[124%] !text-right text-base`}>
                            {date}
                        </span>
                    </>
                    : <>
                        <span className={`inline-block float-left py-3 opacity-70 md:absolute md:w-full md:top-2 md:left-[124%] text-base `}>
                            {date}
                        </span>
                    </>}
            </div>
        </div>
    )
}

export default VerticalTimeLineComponent
