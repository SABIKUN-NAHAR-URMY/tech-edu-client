import React from 'react';
import corsImage from '../../images/cors.png';
import firebaseImg from '../../images/firebase.jpg';
import privateRouteImg from '../../images/privateRoute.png';
import nodejsImg from '../../images/Nodejs-Architecture.png';

const Blog = () => {
    return (
        <div>
            <div className='block md:grid grid-cols-2 gap-4 text-justify mx-auto text-slate-600'>
                
                <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                <img src={corsImage} alt="" />
                    <div>
                        <h1 className='text-2xl font-semibold'><strong>Question-1:</strong> What is cors?</h1>
                        <p className='text-xl'><strong>Answer: </strong> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. </p>
                    </div>
                </div>
                <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                    <img src={firebaseImg} alt="" />
                    <div>
                    <h1 className='text-2xl font-semibold'><strong>Question-2:</strong>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-xl'><strong>Answer: </strong>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to our app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </div>
                </div>

                <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                    <img src={privateRouteImg} alt="" />
                    <div>
                    <h1 className='text-2xl font-semibold'><strong>Question-3:</strong> How does the private route work?</h1>
                    <p className='text-xl'><strong>Answer: </strong>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                </div>

                <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                    <img src={nodejsImg} alt="" />
                    <div>
                    <h1 className='text-2xl font-semibold'><strong>Question-3:</strong> What is Node? How does Node work?</h1>
                    <p className='text-xl'><strong>Answer: </strong>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;