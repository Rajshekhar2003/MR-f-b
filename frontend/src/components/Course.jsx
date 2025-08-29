import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cards from './Cards';
import axios from "axios";
import list from '../../public/List.json';
export default function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get("http://localhost:4001/book");
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[])
    return (
        <>
            <div className="mt-25 ml-4 max-w-screen-2xl container mx-auto md:px px-4">
                <div className='items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl justify-center'>We are delighted to come <span className="text-pink-500">here!</span></h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit sed assumend
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {book
                        .filter((item) => item.price>0) 
                        .map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                </div>

            </div>
        </>

    )
}
