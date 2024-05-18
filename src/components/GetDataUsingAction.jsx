import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"

export default async function GetDataUsingAction() {
    await connectDB();
    const allData = await PostModel.find()
    console.log("All Data using action", allData)

    return (
        <main className="flex flex-col items-center justify-between">
            {
                allData.map((item, index) => (
                    <div key={index} className="mb-5" >
                        <h1 className="text-2xl" > Name: {item.name} </h1>
                        <p> Home: {item.home} </p>
                        <hr />
                    </div>
                ))
            }
        </main>
    )

}

