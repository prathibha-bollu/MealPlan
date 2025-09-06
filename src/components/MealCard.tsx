import { Heart } from 'lucide-react';
import { Meal } from '../types';
import { Button } from './ui/button';

interface MealCardProps {
  meal: Meal;
  isFavorite: boolean;
  onToggleFavorite: (mealId: string) => void;
  onAddToPlanner: (meal: Meal) => void;
}

export function MealCard({ meal, isFavorite, onToggleFavorite, onAddToPlanner }: MealCardProps) {
  return (
    <div className="meal-card group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img 
          src={meal.image} 
          alt={meal.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a default image if the URL fails
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop`;
          }}
        />
        <button
          onClick={() => onToggleFavorite(meal.id)}
          className={`absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border-light transition-all duration-200 hover:scale-110 ${
            isFavorite ? 'favorite-heart active' : 'favorite-heart'
          }`}
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className={`category-pill ${meal.category === 'breakfast' ? 'active' : 'inactive'}`}>
            {meal.category.charAt(0).toUpperCase() + meal.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-card-foreground text-lg leading-tight mb-1">
            {meal.title}
          </h3>
          {meal.description && (
            <p className="text-muted-foreground text-sm line-clamp-2">
              {meal.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-dark font-medium">
              {meal.calories} cal
            </span>
            {meal.prepTime && (
              <span className="text-muted-foreground">
                {meal.prepTime} min
              </span>
            )}
          </div>
          <span className="font-semibold text-primary text-lg">
            ${meal.price}
          </span>
        </div>
        
        <Button 
          onClick={() => onAddToPlanner(meal)}
          className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-medium py-2.5 rounded-lg transition-colors duration-200"
        >
          Add to Planner
        </Button>
      </div>
    </div>
  );
}