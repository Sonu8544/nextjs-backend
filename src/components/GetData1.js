const getData = async () => {

    const quaryParamiter = new Date().getTime();
    const res = await fetch(`http://localhost:3000/api/posts?t=${quaryParamiter}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const post = await res.json();
    return post;
}

export default async function GetData1() {
    const allData = await getData();
    console.log("All Data", allData)

    return (
        <main className="flex flex-col items-center justify-between">
            {
                allData.result.map((item, index) => (
                    <div key={index} className="mb-5" >
                        <h1 className="text-2xl" > Name: {item.name} </h1>
                        <p> Name: {item.home} </p>
                        <hr />
                    </div>
                ))
            }
        </main>
    )

}

