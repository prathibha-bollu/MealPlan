import Hero from '@/components/Hero';
import Profile from "@/components/Profile";
import { addDays, format } from "date-fns";
import { Calendar, ChefHat, Heart } from 'lucide-react';
import { useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { MealCard } from '../components/MealCard';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { WeeklyPlanner } from '../components/WeeklyPlanner';
import { useMealPlanner } from '../hooks/useMealPlanner';
import { Meal } from '../types';

const Index = () => {
  const {
    meals,
    favorites,
    weeklyPlan,
    selectedMeal,
    filters,
    toggleFavorite,
    addMealToPlan,
    removeMealFromPlan,
    updateFilters
  } = useMealPlanner();

  const [activeTab, setActiveTab] = useState('catalog');
  const [plannerMeal, setPlannerMeal] = useState<Meal | null>(null);
  const [plannerDate, setPlannerDate] = useState('');
  const [plannerMealType, setPlannerMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');
  const [isDayPickerOpen, setIsDayPickerOpen] = useState(false);

  const favoriteCountText = favorites.size > 0 ? ` (${favorites.size})` : '';

  // Triggered when clicking "Add to Planner" on a meal card
  const handleAddToPlanner = (meal: Meal) => {
    setPlannerMeal(meal);
    setIsDayPickerOpen(true);
  };

  // Confirm adding to planner
  const confirmAddToPlanner = () => {
    if (plannerMeal && plannerDate) {
      addMealToPlan(plannerDate, plannerMealType, plannerMeal);
      setPlannerMeal(null);
      setPlannerDate('');
      setIsDayPickerOpen(false);
      setActiveTab('planner'); // switch to weekly planner
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border-light sticky top-0 z-50 backdrop-blur-sm bg-card/95">
  <div className="container mx-auto px-4 py-6 flex items-center justify-between">

    {/* Left: Logo + App Name */}
    <div className="flex items-center gap-4">
      <div className="p-2 rounded-lg bg-primary/10">
        <ChefHat className="h-8 w-8 text-primary" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">MealPlan</h1>
        <p className="text-muted-foreground text-sm">Your weekly meal planning companion</p>
      </div>
    </div>

    {/* Right: Nav + User + Selected Meal */}
    <div className="flex items-center gap-6">
      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6">
  <a
    href="#"
    onClick={(e) => e.preventDefault()}
    className="text-foreground hover:text-primary transition"
  >
    About
  </a>
  <a
    href="#"
    onClick={(e) => e.preventDefault()}
    className="text-foreground hover:text-primary transition"
  >
    Contact
  </a>
</nav>

      {/* User Profile */}
    
<Profile />
    </div>

  </div>
</header>


      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="mb-12">
          <Hero />
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="catalog" className="flex items-center gap-2"> 
              <ChefHat className="h-4 w-4" /> Meal Catalog </TabsTrigger> 
              <TabsTrigger value="planner" className="flex items-center gap-2">
                 <Calendar className="h-4 w-4" /> Weekly Planner </TabsTrigger>
                  <TabsTrigger value="favorites" className="flex items-center gap-2"> 
                    <Heart className="h-4 w-4" /> Favorites{favoriteCountText} 
                    </TabsTrigger>
          </TabsList>

          {/* Catalog Tab */}
          <TabsContent value="catalog" className="space-y-6">
            <div className="space-y-4">
              <SearchBar 
                searchTerm={filters.searchTerm}
                onSearchChange={(term) => updateFilters({ searchTerm: term })}
              />
              <CategoryFilter
                selectedCategory={filters.category}
                onCategoryChange={(category) => updateFilters({ category })}
                showFavoritesOnly={filters.showFavoritesOnly}
                onToggleFavorites={() => updateFilters({ showFavoritesOnly: !filters.showFavoritesOnly })}
              />
            </div>

            <div id="meal-catalog" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {meals.map(meal => (
    <MealCard
      key={meal.id}
      meal={meal}
      isFavorite={favorites.has(meal.id)}
      onToggleFavorite={toggleFavorite}
      onAddToPlanner={handleAddToPlanner}
    />
  ))}
</div>


            {meals.length === 0 && (
              <div className="text-center py-12">
                <ChefHat className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No meals found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find more meals.
                </p>
              </div>
            )}
          </TabsContent>

          {/* Weekly Planner Tab */}
          <TabsContent value="planner" className="space-y-6">
            <WeeklyPlanner
              weeklyPlan={weeklyPlan}
              onAddMeal={addMealToPlan}
              onRemoveMeal={removeMealFromPlan}
              selectedMeal={selectedMeal}
            />
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            {favorites.size > 0 ? (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">
                    Your Favorite Meals ({favorites.size})
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => updateFilters({ showFavoritesOnly: true, category: 'all' })}
                    className="gap-2"
                  >
                    <ChefHat className="h-4 w-4" />
                    Browse Favorites
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {meals.filter(meal => favorites.has(meal.id)).map(meal => (
                    <MealCard
                      key={meal.id}
                      meal={meal}
                      isFavorite={true}
                      onToggleFavorite={toggleFavorite}
                      onAddToPlanner={handleAddToPlanner} // <-- updated
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start browsing meals and click the heart icon to add them to your favorites.
                </p>
                <Button onClick={() => setActiveTab('catalog')}>
                  Browse Meals
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Day Picker Dialog */}
      <Dialog open={isDayPickerOpen} onOpenChange={setIsDayPickerOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Pick a Day & Meal Type</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4 space-y-4">
            <p className="text-muted-foreground">Select which day and meal type to add this meal.</p>
    

<div className="grid grid-cols-3 gap-2">
  {Array.from({ length: 7 }).map((_, i) => {
    const day = addDays(new Date(), i); // today + i
    const dateKey = format(day, "yyyy-MM-dd"); // used for saving
    const label = format(day, "EEE, MMM d");   // shown to user

    return (
      <button
        key={dateKey}
        className={`py-2 px-3 rounded ${
          plannerDate === dateKey ? "bg-primary text-white" : "bg-muted/30"
        }`}
        onClick={() => setPlannerDate(dateKey)} // store real date
      >
        {label}
      </button>
    );
  })}
</div>

            <div className="flex justify-center gap-2 mt-4">
              {['breakfast','lunch','dinner'].map(type => (
                <button
                  key={type}
                  className={`py-2 px-4 rounded ${
                    plannerMealType === type ? 'bg-primary text-white' : 'bg-muted/30'
                  }`}
                  onClick={() => setPlannerMealType(type as 'breakfast'|'lunch'|'dinner')}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <Button onClick={confirmAddToPlanner}>
                Add to Planner
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
