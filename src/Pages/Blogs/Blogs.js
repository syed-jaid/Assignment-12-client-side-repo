import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='p-[25px]'>
                <h1 className='text-[30px] text-[#12b9d6] '>1. How will you improve the performance of a React Application?</h1>
                <div className='py-[20px] text-[19px]'>
                    <h1 className='text-2xl'>Ans : We can improve the performance of a React Application by flow some steps . The steps are :</h1>
                    <ul>
                        <li>1. Receive the only necessary props</li>
                        <li>2.  Create a functional component that will collect all props and redistribute them to other components.</li>
                        <li>3. Keeping component state local where necessary.</li>
                        <li>4. Lazy loading images in React.</li>
                        <li>5. Code-splitting in React using dynamic import().</li>
                        <li>6. Analytics tracking libraries, excessive CSS animations, non-optimized images, iframes, and many more factors can hamper performance..</li>
                    </ul>
                </div>
            </div>
            <div className='p-[25px]'>
                <h1 className='text-[30px] text-[#12b9d6] '>5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <div className='py-[20px] text-[19px]'>
                    <h1 className='text-2xl'>Ans : We set the array in useState because useState is a Hook that allows to have state variables in functional components.we pass the initial state to this function and it returns a variable with the current state.
                        By writting the code like that ( products = [...] ) con't not understand that the state is changed or not .That is the reseion to use useState .
                    </h1>

                </div>
            </div>
            <div className='p-[25px]'>
                <h1 className='text-[30px] text-[#12b9d6] '>. What are the different ways to manage a state in a React application?</h1>

                <div className='py-[20px] text-[19px]'>
                    <h1 className='text-2xl'>Ans : There are four main types of state you need to properly manage in your React apps: :</h1>
                    <ul>
                        <li>1. Local state.</li>
                        <li>2. Global state.</li>
                        <li>3. Server state.</li>
                        <li>4. URL state.</li>
                    </ul>
                </div>
            </div>
            <div className='p-[25px]'>
                <h1 className='text-[30px] text-[#12b9d6] '>3. How does prototypical inheritance work?</h1>
                <div className='py-[20px] text-[19px]'>
                    <h1 className='text-2xl'>Ans :
                        Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be prototypal, prototype-oriented, classless, or instance-based programming. The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It is a method by which an object can inherit the properties and methods of another object.</h1>

                </div>
            </div>
            <div className='p-[25px]'>
                <h1 className='text-[30px] text-[#12b9d6] '>4. What is a unit test? Why should write unit tests?</h1>
                <div className='py-[20px] text-[19px]'>
                    <h1 className='text-2xl'>Ans : Unit testing is an essential step in the development process because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages the main objective of unit testing is to isolate written code to test and determine if it works as intended. . A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method, or a property.</h1>

                </div>
            </div>

        </div>
    );
};

export default Blogs;