import React, { useEffect, useState } from 'react';
import { Form, Label, ListBox, Select } from "@heroui/react";
const CategoryFilter = ({ideas,onFilter}) => {
    const [category,setCategory]=useState('')
   
    const getCategory = (e) => {
        const value = e.target.value
        setCategory(value)
    }
    useEffect(() => {
            const filterData = ideas.filter((curValue) =>
                curValue.category.toLowerCase().includes(category.toLowerCase())
            );
            onFilter(filterData);
        }, [category, ideas]);
        console.log(category);
    return (
        <select
            className="shadow-md rounded-[12px] h-[40px] p-2 dark:bg-gray-900"
            onChange={getCategory}
        >
            <option value="">All Categories</option>
            <option value="Social">Social</option>
            <option value="Education">Education</option>
            <option value="AI">AI</option>
            <option value="Health">Health</option>
            <option value="Tech">Tech</option>
            <option value="Other">Others</option>
        </select>
    );
};

export default CategoryFilter;