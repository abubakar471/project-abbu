"use client"

import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const HomeCard = ({
    paper,
}) => {
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState("0");

    const handleSubmit = async (e) => {
        e.preventDefault();

        var currentDate = date.getDate() < 10 ? `${"0" + date?.getDate()}` : date?.getDate();
        var year = date.getFullYear();
        var month = date.getUTCMonth() + 1;
        var currentMonth = month < 10 ? `0${month}` : month;

        console.log(`https://www.ebdpratidin.com/assets/contents/${year}/${year}-${currentMonth}-${currentDate}/bigPages/`)
        if (paper === 'bd-protidin') {
            window.open(`https://www.ebdpratidin.com/assets/contents/${year}/${year}-${currentMonth}-${currentDate}/bigPages/${page === "0" ? "" : `${year}-${currentMonth}-${currentDate}_${page}.jpg`}`, '_blank').focus();
        }

        if (paper === 'somokal') {
            window.open(`https://epaper.samakal.com/nogor-edition/${year}-${currentMonth}-${currentDate}/${page === "0" ? "1" : page}`, '_blank').focus();
        }

        if (paper === 'jugantor') {
            window.open(`https://epaper.jugantor.com/second-edition/${year}-${currentMonth}-${currentDate}?${page === "0" ? "page=1" : `page=${page}`}`, '_blank').focus();
        }
    }
    return (
        <div className='w-[350px] lg:w-[80%] mx-auto min-h-[600px] rounded-3xl bg-blend-saturation backdrop-blur-xl backdrop:slide-out-to-right-72 bg-gray-100 flex flex-wrap lg:flex-nowrap py-4  items-center justify-center shadow-xl shadow-[rgba(0,0,0,0.1)] gap-2'>
            <h3 className='text-3xl xl:text-6xl text-black font-bold px-2 text-center'>
                {paper === "bd-protidin" && "বাংলাদেশ প্রতিদিন"}
                {paper === "somokal" && "সমকাল"}
                {paper === "jugantor" && "যুগান্তর"}
            </h3>

            <div className='px-4'>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border selection:text-white"
                />

                <div>
                    <Select onValueChange={value => setPage(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Page" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="11">11</SelectItem>
                            <SelectItem value="12">12</SelectItem>

                            {
                                paper === "somokal" && (
                                    <>
                                        <SelectItem value="13">13</SelectItem>
                                        <SelectItem value="14">14</SelectItem>
                                        <SelectItem value="15">15</SelectItem>
                                        <SelectItem value="16">16</SelectItem>
                                    </>
                                )
                            }

                            {
                                paper === "jugantor" && (
                                    <>
                                        <SelectItem value="13">13</SelectItem>
                                        <SelectItem value="14">14</SelectItem>
                                        <SelectItem value="15">15</SelectItem>
                                        <SelectItem value="16">16</SelectItem>
                                    </>
                                )
                            }
                        </SelectContent>
                    </Select>
                </div>

                <button type='submit' onClick={handleSubmit} className='mt-2 bg-[#0F172A] text-white rounded-lg px-4 py-2 w-full'>Submit</button>
            </div>


        </div>
    )
}

export default HomeCard