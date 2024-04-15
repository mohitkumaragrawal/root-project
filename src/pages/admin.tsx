import Container from "@/components/container";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";

const Result = () => {
    const firebase = useFirebase();
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [json, setJson] = useState("");
    const [selectedVendorType, setSelectedVendorType] = useState('');

    const handleSelectChange = (e) => {
        setSelectedVendorType(e.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Handlelick", json, "SVT", selectedVendorType)
        firebase.createVendor(selectedImages, json, selectedVendorType);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const selectedFiles = Array.from(files);
            setSelectedImages(selectedFiles);
        }
    };

    return (
        <Container className="flex flex-wrap gap-5 items-center justify-center">
            <div className="p-4 bg-gray-200 mb-7">
                <form action="" className="max-w-xl mx-auto ">
                    <textarea
                        className="w-full h-40 resize-none border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                        onChange={(e) => setJson(e.target.value)}
                        placeholder="Enter JSON data here..."></textarea>
                    <div className="mt-4">
                        <label htmlFor="vendorType" className="block text-sm font-medium text-gray-700">Select Vendor Type:</label>
                        <select id="vendorType" name="vendorType" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" onChange={handleSelectChange} >
                            <option value="venue">Venue</option>
                            <option value="photograph">Photograph</option>
                            <option value="music">Music</option>
                            <option value="food">Food</option>
                        </select>
                    </div>
                    <input className="mt-4" onChange={handleFileChange} type="file" multiple />
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleClick}>
                        Submit
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default Result;

