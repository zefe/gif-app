import React, { useState} from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['pokemon'])


  return(
      <div>
      <h1>Find your favorite gifs</h1>
        <div className="header">
          
          <AddCategory setCategories={ setCategories } />
        </div>
        <hr/>

        <ol>
          {
            categories.map((category) => ( 
              <GifGrid
                key={category}
                category={category}
                />
            ))
          }
        </ol>
      </div>
  );
};

export default GifExpertApp;
