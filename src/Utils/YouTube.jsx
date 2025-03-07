
const YouTubeIframe = (props) => (
    <div className='my-5'>
        <p className='text-xl'>{props.title}</p>
        <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

);

export default YouTubeIframe;

