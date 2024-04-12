"use client";
// import Image from "next/image";
// import Modal from '../../../components/Modal';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useTodo } from '../../../hooks/todo'
import Loading from '../../../components/Loading'
import TodoSection from '../../../components/todo/TodoSection'
import styles from '../../../styles/Home.module.css'

const Index: React.FC = async () => {
        const { loading, completedTodos, incompleteTodos, markTodo, removeTodo } = useTodo()
    
    
        return (
            <div className={styles.container}>    
                <div className={styles.mainContainer}>
                    <h1>Hello World!</h1>
                </div>
            </div>
        )
    }
    

export default Index;
