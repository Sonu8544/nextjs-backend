import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";

const formAction = async (formData) => {
    'use server'
    await connectDB();

    const data = new FormData();
    data.append("name", formData.get("name"));
    data.append("home", formData.get("home"));
    data.append("imageUrl", formData.get("imageUrl") || "");

    const result = await PostModel.create({
        name: data.get("name"),
        home: data.get("home"),
        imageUrl: data.get("imageUrl"),
    });
    console.log("result", result);
}

const PostDataUsingAction = () => {
    return (
        <form action={formAction} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">
                    Name
                </label>
                <input
                    placeholder="Your name"
                    type="text"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-custom-black"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="home" className="block text-white font-bold mb-2">
                    Home
                </label>
                <input
                    placeholder="Your home"
                    type="text"
                    name="home"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-custom-black"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="imageUrl" className="block text-white font-bold mb-2">
                    Image URL
                </label>
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Enter image URL"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

export default PostDataUsingAction;