import { useParams } from "react-router-dom";
import { firebaseActions } from "../../API";
import { useEffect, useState } from "react";
import { successStory } from "../../Shared/types";
import parse from "html-react-parser";

function SuccessStoryReadMore() {
    const { id } = useParams()
    const [story, setStory] = useState<successStory | null>()
    useEffect(() => {
        async function fetchData() {
            const successStory = (await firebaseActions.getSingle("successStories", id as string)) as successStory;
            if (successStory) {
                setStory(successStory)
            }
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {!story ? <p className='my-4 text-center '>Story not Found</p> :
                <div className='w-11/12 mx-auto '>
                    <img src={story.image} alt={story.id} className='h-[40vh] rounded-[8px] object-cover w-full' />
                    <p className='pt-4 font-bold text-center'> {story.names}</p>
                    <p className='pt-4 font-bold text-center'>Current Works at <span className='px-4 py-1 text-white bg-light-chocolate'>{story.worksAt}</span> </p>
                    <div className="my-4">
                        {parse(story.story)}
                    </div>

                </div>}
        </div>
    )
}

export default SuccessStoryReadMore