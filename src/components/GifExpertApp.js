import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Re: Zero']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( item => ( 
                        <GifGrid 
                            key={item}
                            category={item}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;