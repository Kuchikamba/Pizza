import React from 'react';



const CategoryList = ({ categories, onSelect }) => {
    const handleSelect = (categoryId) => () => {
    onSelect(categoryId);
    };
    
    return (
        <div>
            {categories.map(category => (
                <button key={category.id} onClick={handleSelect(category.id)}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
