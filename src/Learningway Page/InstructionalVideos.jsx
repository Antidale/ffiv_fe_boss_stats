import YouTubeIframe from '../Utils/YouTube';
import React from 'react';
import { useTitle } from '../Effects/SetTitle';


const InstructionalVideos = () => {
    useTitle("Instructional Videos")

    return (
        <article className='mx-auto max-w-6/10'>
            <h1 className='text-3xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg'>Instructional Videos</h1>
            <ul className='list-none'>
                <li>
                    <YouTubeIframe title="Kmain Walkthrough" url="https://www.youtube.com/embed/FiG22k-sD88?si=MfYZK20IjdVg-EnW" />
                </li>
                <li>
                    <YouTubeIframe title="Ksummon Walkthrough" url="https://www.youtube.com/embed/DofNt0zSspA?si=IazstpXcVsQVMdU-" />
                </li>
                <li>
                    <YouTubeIframe title="Kmoon Walkthrough" url="https://www.youtube.com/embed/FzXE2Xvj51A?si=WZ-WKf57iBPEwPOk" />
                </li>
                <li>
                    <YouTubeIframe title="Understanding Agility in Final Fantasy IV: Free Enterprise by tallgrant" url="https://www.youtube.com/embed/cAbnhESM6N4?si=SMVMC-szr-VT5w59" />
                </li>
            </ul>
        </article>
    );

}

export default InstructionalVideos;
