import React from 'react';

const Categories = ({categories,filterItem}) => {

  return <div className="btn-container">
    
    {categories.map((item,index) => {
            return (<button type='button' className='filter-btn'  key={index} onClick={()=> filterItem(item)}>
                {item}
            </button>
            );
        })
    }
  </div>
};

export default Categories;