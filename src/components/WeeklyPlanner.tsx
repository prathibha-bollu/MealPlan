import { addDays, format, isToday } from 'date-fns';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Meal, WeeklyPlan } from '../types';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from './ui/dialog';

interface WeeklyPlannerProps {
  weeklyPlan: WeeklyPlan;
  onAddMeal: (date: string, mealType: 'breakfast' | 'lunch' | 'dinner', meal: Meal) => void;
  onRemoveMeal: (date: string, mealType: 'breakfast' | 'lunch' | 'dinner', mealId: string) => void;
  selectedMeal?: Meal;
}

export function WeeklyPlanner({ weeklyPlan, onAddMeal, onRemoveMeal, selectedMeal }: WeeklyPlannerProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const today = new Date();
const weekDays = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const handleAddMeal = (date: string, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    if (selectedMeal) {
      onAddMeal(date, mealType, selectedMeal);
    } else {
      setSelectedDate(date);
      setSelectedMealType(mealType);
      setIsDialogOpen(true);
    }
  };

  const getMealsForDay = (date: string, mealType: 'breakfast' | 'lunch' | 'dinner'): Meal[] => {
    return weeklyPlan[date]?.[mealType] || [];
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Weekly Meal Plan</h2>
        <span className="text-muted-foreground">
          Week of {format(today, 'MMM d, yyyy')}
        </span>
      </div>

      <div className="weekly-calendar">
        {weekDays.map((day) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const dayIsToday = isToday(day);
          
          return (
            <div 
              key={dateStr} 
              className={`calendar-day ${dayIsToday ? 'today' : ''}`}
            >
              <div className="text-center mb-3">
                <div className="font-semibold text-foreground">
                  {format(day, 'EEE')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {format(day, 'MMM d')}
                </div>
              </div>

              <div className="space-y-2">
                {(['breakfast', 'lunch', 'dinner'] as const).map((mealType) => {
                  const meals = getMealsForDay(dateStr, mealType);
                  
                  return (
                    <div key={mealType} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-dark capitalize">
                          {mealType}
                        </span>
                        <button
                          onClick={() => handleAddMeal(dateStr, mealType)}
                          className="p-1 rounded hover:bg-muted/50 transition-colors"
                        >
                          <Plus className="h-3 w-3 text-muted-foreground" />
                        </button>
                      </div>
                      
                      {meals.map((meal) => (
                        <div key={meal.id} className="planned-meal group flex items-center justify-between">
                          <span className="text-xs truncate flex-1 mr-1">
                            {meal.title}
                          </span>
                          <button
                            onClick={() => onRemoveMeal(dateStr, mealType, meal.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Meal to Plan</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Select a meal from the catalog first, then click "Add to Planner" to schedule it.
            </p>
            <Button onClick={() => setIsDialogOpen(false)} variant="outline">
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}