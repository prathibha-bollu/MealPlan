import { CategoryType } from '../types';

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

const categories: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'All Meals' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' }
];

export function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange, 
  showFavoritesOnly, 
  onToggleFavorites 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-pill ${
              selectedCategory === category.id ? 'active' : 'inactive'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="h-4 w-px bg-border-light" />
      
      <button
        onClick={onToggleFavorites}
        className={`category-pill ${showFavoritesOnly ? 'active' : 'inactive'}`}
      >
        ❤️ Favorites Only
      </button>
    </div>
  );
}