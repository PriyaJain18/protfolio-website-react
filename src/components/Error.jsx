import React from 'react';

const Error = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div>
                ERROR PAGE
            </div>
             <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                We're sorry !
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                404 ERROR : PAGE NOT FOUND
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Please try later !!
                </p>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Error;
