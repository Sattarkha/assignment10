import Image from "next/image"

export default function ProductCard() {
    return (  
        <div
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-between gap-4 mt-24 pt-24 bg-slate-400 ">            
        <div className="md:w-10/12 w-full mb-50 border border-red-900 bg-red-700">
      
                <div className="flex items-center justify-center">
                    

                    <Image
                        src="/f16.avif"
                        alt="Product one"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">this is F16</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
               
            <div className="md:w-10/12 w-full mb-50 border border-red-900 bg-red-700 ">
                <div className="flex items-center justify-center">
                    <Image
                        src="/mig21.jpeg"
                        alt="Product Two"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">this is MIG21</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
    
            <div className="md:w-10/12 w-full border border-red-900 bg-red-700">
                <div className="flex items-center justify-center">
                    <Image
                        src="/mirage2.jpeg"
                        alt="Product Three"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">this is MIRAGE</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12 w-full border border-red-900 bg-red-700">
                <div className="flex items-center justify-center">
                    <Image
                        src="/j10c.avif"
                        alt="Product four"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">this is J10c</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12 w-full border border-red-900 bg-red-700">
                <div className="flex items-center justify-center">
                    <Image
                        src="/su35.jpg"
                        alt="Product five"
                        width={300}
                        height={300}
                    />
                </div><br /><br /><br />
                <p className="text-center pt-10">this is SU35</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="md:w-10/12 w-full border border-red-900 bg-red-700">
                <div className="flex items-center justify-center">
                    <Image
                        src="/dassault-rafale.jpg"
                        alt="Product six"
                        width={300}
                        height={300}
                    />
                </div><br /><br /><br />
                <p className="text-center pt-10">this is Rafale</p>
                <p className="text-center pt-2">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-2 bg-green-600 text-black rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>

    )
}