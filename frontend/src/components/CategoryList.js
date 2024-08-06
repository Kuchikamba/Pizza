import React from 'react';

const CategoryList = ({ categories, onSelect }) => {
    return (
        <div>
            {categories.map(category => (
                <button key={category.id} onClick={() => onSelect(category.id)}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
