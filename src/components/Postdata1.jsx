"use client";
import React, { useState } from "react";

const Postdata1 = () => {
    const [formData, setFormData] = useState({
        name: "",
        home: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        console.log("responce", res);
        setFormData({
            name: "",
            home: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">
                    name
                </label>
                <input
                    placeholder="your name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-custom-black"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="home" className="block text-white font-bold mb-2">
                    home
                </label>
                <input
                    placeholder="your home"
                    type="text"
                    id="home"
                    name="home"
                    value={formData.home}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-custom-black"
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Postdata1;