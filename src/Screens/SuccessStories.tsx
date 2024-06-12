import { useEffect, useState } from "react"
import AnimatePage from "../Shared/AnimatePage"
import { successStory } from "../Shared/types"
import success from "../assets/Testimonial3.jpg"
import { firebaseActions } from "../API"
import SuccessStory from "./LogedInStaff/SuccessStory"

function SuccessStories() {
    const [stories, setStories] = useState<successStory[]>([])

    useEffect(() => {
        const getStories = async () => {
            const stories = await firebaseActions.getData('successStories') as successStory[]
            if (stories) {
                setStories(stories)
            }
        }
        getStories()
    })
    return (
        <AnimatePage>
            <main className='nin-h-[100vh]'>

                <section className="min-h-[70vh] w-full flex flex-col relative">
                    <div className="min-h-[70vh]">
                        <img
                            src={success}
                            className="w-full h-[70vh] object-cover object-center" />
                    </div>
                    <div className=" absolute h-[70vh] top-0 px-6 w-full items-center bg-[rgba(255,255,255,0.8)] z-100 flex flex-col  justify-center">
                        <h1 className="text-6xl font-semibold text-primary-orange font-paprika">
                            Success Stories
                        </h1>
                    </div>
                </section>
                <section className='mb-3'>
                    <p className="my-6 text-xl font-semibold text-center text-primary-orange font-paprika">
                        "If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime."
                    </p>
                    <p className="my-6 text-center text-primary-orange font-paprika">
                        We provide our students with enough knowledge about coffee making to the point they can become teachers themselves.
                    </p>
                </section>
                <section className="min-h-[100vh]">
                    {stories.length === 0 ? <p className='my-3 text-center'>No Stories Added</p> : <div>
                        {stories.map((story) => {
                            return (
                                <SuccessStory key={story.id} story={story} />
                            )
                        })}
                    </div>}
                </section>
            </main>
        </AnimatePage>
    )
}

export default SuccessStories