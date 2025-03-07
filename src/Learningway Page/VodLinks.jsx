
const VodLinks = (props) => (
    <details className='text-lg text-center border-2 border-white outline outline-black rounded-sm border-1 max-w-1/4 my-5 shadow-sm '>
        {props.vodInfo.map(info =>
            <p className="pl-5 py-1 text-left">
                <a href={info.vodUrl} className="border-b-2 border-blue-600">
                    {info.runnerName}
                </a>
            </p>
        )}
        <summary className='text-white text-md mt-0 bg-darkblue'>
            Click to show VOD links
        </summary>
    </details>
);

export default VodLinks;