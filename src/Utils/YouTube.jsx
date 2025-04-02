
const YouTubeIframe = (props) => (
        <div className='my-5'>
                <p className='text-xl'>{props.title}</p>
                <iframe width="560" height="315" src={props.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

);

export default YouTubeIframe;

