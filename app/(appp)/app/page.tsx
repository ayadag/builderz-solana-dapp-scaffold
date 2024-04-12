// "use client";
// import Image from "next/image";
// import Modal from '../../../components/Modal';

// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
// import { useTodo } from '../../../hooks/todo'
// import Loading from '../../../components/Loading'
// import TodoSection from '../../../components/todo/TodoSection'
// import styles from '../../../styles/Home.module.css'

const Index: React.FC = async () => {
        // const { loading, completedTodos, incompleteTodos, markTodo, removeTodo } = useTodo()
    
    
        return (
            <div className='w-full h-screen flex justify-center items-center '>

            {/* Intro Content */}
            <div className="max-w-md bg-transparent  text-black dark:text-white rounded-lg shadow-lg border border-0.5 border-gray-300 dark:border-gray-800 p-[1.25rem]">
            <div className="flex flex-col justify-center p-4 bg-inherit gap-10">
                
                <h2>Hello World!</h2>

            </div>
            </div>
            </div>
        )
    }
    

export default Index;
