export interface Meal {
  id: string;
  title: string;
  category: 'breakfast' | 'lunch' | 'dinner';
  calories: number;
  price: number;
  image: string;
  description?: string;
  prepTime?: number;
  tags?: string[];
}

export interface PlannedMeal {
  id: string;
  mealId: string;
  date: string; // ISO date string
  mealType: 'breakfast' | 'lunch' | 'dinner';
}

export interface WeeklyPlan {
  [date: string]: {
    breakfast?: Meal[];
    lunch?: Meal[];
    dinner?: Meal[];
  };
}

export type CategoryType = 'all' | 'breakfast' | 'lunch' | 'dinner';

export interface FilterState {
  category: CategoryType;
  searchTerm: string;
  showFavoritesOnly: boolean;
}