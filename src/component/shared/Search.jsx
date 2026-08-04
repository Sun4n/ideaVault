'use client'
import { Label, SearchField } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const Search = ({ ideas,onFilter }) => {
    const [data, setData] = useState('')
    const getData = (e) => {
        // console.log(e.target.value);
        setData(e.target.value)
    }
    // console.log(products[0].tag);
    useEffect(() => {
        const filterData = ideas.filter((curValue) =>
            curValue.tag.toLowerCase().includes(data.toLowerCase())
        );
        onFilter(filterData);
    }, [data, ideas]);
    // console.log(filterData);
    return (
        <div className="w-[400px] space-y-4">
            <SearchField fullWidth name="search">
                <Label>Search</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search..." onChange={getData} />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default Search;