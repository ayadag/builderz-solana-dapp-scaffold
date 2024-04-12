"use client";
// import Image from "next/image";
// import Modal from '../../../components/Modal';

// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useTodo } from '../../../hooks/todo'
// import Loading from '../../../components/Loading'
// import TodoSection from '../../../components/todo/TodoSection'
// import styles from '../../../styles/Home.module.css'

const Index: React.FC = async () => {
        // const { incompleteTodos, markTodo } = useTodo()
        const numbers = [1, 2, 3, 4, 5];
                    const listItems = numbers.map((number) =>
                      <li key={number.toString()}>
                        {number}
                        </li>
                    );
        
        const incT = useTodo().incompleteTodos;
        const incTL = incT.map((inct) => 
        <li key={inct.toString()}>
            {inct}
        </li>
        );
        return (
            <div className='w-full h-screen flex justify-center items-center '>

            {/* Intro Content */}
            <div className="max-w-md bg-transparent  text-black dark:text-white rounded-lg shadow-lg border border-0.5 border-gray-300 dark:border-gray-800 p-[1.25rem]">
            <div className="flex flex-col justify-center p-4 bg-inherit gap-10">
                
                <h2>Hello World!</h2>
                {/* <TodoSection title="Tasks" todos={incompleteTodos} action={markTodo} /> */}

                <ul>{listItems}</ul>

                <ul>{incTL}</ul>

            </div>
            </div>
            </div>
        )
    }
    

export default Index;
