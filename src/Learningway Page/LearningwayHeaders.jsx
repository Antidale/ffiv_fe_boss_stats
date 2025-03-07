const LearningwayH2 = (props) => (
    <h2 className='text-3xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black'>{props.text}</h2>
);

const LearningwayH3 = (props) => (
    <h3 className='text-2xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-5/8 mx-auto mt-7 mb-5 outline outline-black shadow-lg'>{props.text}</h3>
);

const Headers = {
    LH2: LearningwayH2,
    LH3: LearningwayH3
}

export default Headers