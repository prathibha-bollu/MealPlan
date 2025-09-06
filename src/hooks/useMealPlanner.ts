import { useCallback, useState } from 'react';
import { allMeals } from '../data/meals';
import { FilterState, Meal, WeeklyPlan } from '../types';
import { useToast } from './use-toast';

export function useMealPlanner() {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({});
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    searchTerm: '',
    showFavoritesOnly: false
  });

  const toggleFavorite = useCallback((mealId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(mealId)) {
        newFavorites.delete(mealId);
        toast({
          title: "Removed from favorites",
          description: "Meal removed from your favorites list.",
        });
      } else {
        newFavorites.add(mealId);
        toast({
          title: "Added to favorites",
          description: "Meal added to your favorites list.",
        });
      }
      return newFavorites;
    });
  }, [toast]);

  const addMealToPlan = useCallback((date: string, mealType: 'breakfast' | 'lunch' | 'dinner', meal: Meal) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        [mealType]: [...(prev[date]?.[mealType] || []), meal]
      }
    }));
    
    toast({
      title: "Meal added to plan",
      description: `${meal.title} added to ${mealType} on ${new Date(date).toLocaleDateString()}`,
    });
    
    setSelectedMeal(null);
  }, [toast]);

  const removeMealFromPlan = useCallback((date: string, mealType: 'breakfast' | 'lunch' | 'dinner', mealId: string) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        [mealType]: prev[date]?.[mealType]?.filter(meal => meal.id !== mealId) || []
      }
    }));
    
    toast({
      title: "Meal removed",
      description: "Meal removed from your plan.",
    });
  }, [toast]);

  const selectMealForPlanning = useCallback((meal: Meal) => {
    setSelectedMeal(meal);
    toast({
      title: "Meal selected",
      description: `${meal.title} is ready to add to your plan. Click on a day and meal type.`,
    });
  }, [toast]);

  const updateFilters = useCallback((newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const filteredMeals = allMeals.filter(meal => {
    if (filters.category !== 'all' && meal.category !== filters.category) {
      return false;
    }
    
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      if (!meal.title.toLowerCase().includes(searchLower) && 
          !meal.description?.toLowerCase().includes(searchLower) &&
          !meal.tags?.some(tag => tag.toLowerCase().includes(searchLower))) {
        return false;
      }
    }
    
    if (filters.showFavoritesOnly && !favorites.has(meal.id)) {
      return false;
    }
    
    return true;
  });

  return {
    meals: filteredMeals,
    favorites,
    weeklyPlan,
    selectedMeal,
    filters,
    toggleFavorite,
    addMealToPlan,
    removeMealFromPlan,
    selectMealForPlanning,
    updateFilters
  };
}