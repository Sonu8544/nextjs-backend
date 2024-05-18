import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";

const formAction = async (formData) => {
    'use server'
    await connectDB();

    const result = await PostModel.create({
        name: formData.get("name"),
        home: formData.get("home")
    })
    console.log("result0", result)
}
const PostDataUsingAction = () => {
    return (
        <form action={formAction} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">
                    name
                </label>
                <input
                    placeholder="your name"
                    type="text"
                    name="name"
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
                    name="home"
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

export default PostDataUsingAction;