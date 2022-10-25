import React from 'react';

const FAQ = () => {
    return (
        <div className='w-[80%] h-96 mx-auto'>
            <div className="collapse w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-600 peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-slate-700 text-primary-content peer-checked:bg-slate-600 peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;