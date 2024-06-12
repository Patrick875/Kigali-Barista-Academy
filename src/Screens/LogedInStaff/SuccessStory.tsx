import { Link, useNavigate } from 'react-router-dom';
import { successStory } from '../../Shared/types';
import { useAuth } from '../../Context/AuthContext';
import { getThefirstFiveSentences } from '../../helpers';
import parse from "html-react-parser";
import React from 'react';


type Props = {
    story: any;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    setItemId?: React.Dispatch<React.SetStateAction<string>>;
}

function SuccessStory({ story, setShow, setItemId }: Props) {
    const navigate = useNavigate()
    const authenticated = useAuth()
    return (
        <div
            className={` md:flex md:gap-3 p-2  md:h-[52vh]  ${authenticated ? "bg-white" : "bg-slate-100"}`}>
            <img
                key={crypto.randomUUID()}
                src={story.image}
                onClick={() => navigate(`${story.id}`)}
                className="object-cover w-full md:w-1/2  cursor-pointer  rounded-[8px]"
            />
            <div className="w-full md:w-1/2">
                <p className="mt-2 text-2xl font-bold text-center capitalize md:text-start">
                    {story.names}
                </p>
                <p className="inline-block px-4 mt-2 font-bold text-center text-white capitalize bg-black md:text-start">
                    Works at {story.worksAt}
                </p>
                <p className="mt-2 capitalize">
                    {parse(getThefirstFiveSentences(story.story))}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 md:justify-normal md:flex-row ">
                    <Link
                        to={`${story.id}`}
                        className="block px-4 py-2 my-2 text-white cursor-pointer bg-light-chocolate ">
                        Read More
                    </Link>
                    {!authenticated ? null : (
                        <>

                            <Link
                                to={`${story.id}/update`}
                                className="block my-2 font-bold cursor-pointer text-sky-700 ">
                                <p>Update</p>
                            </Link>

                            {setItemId && setShow &&
                                <button
                                    onClick={() => {
                                        setItemId(story.id as string);
                                        setShow(true);
                                    }}
                                    className="text-pink-900">
                                    Delete
                                </button>
                            }

                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default SuccessStory