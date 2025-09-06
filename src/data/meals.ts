import { Meal } from '../types';

export const sampleMeals: Meal[] = [
  // Breakfast Items (35 items)
  {
    id: '1',
    title: 'Avocado Toast with Eggs',
    category: 'breakfast',
    calories: 420,
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    description: 'Creamy avocado on sourdough with perfectly poached eggs',
    prepTime: 15,
    tags: ['healthy', 'protein', 'vegetarian']
  },
  {
    id: '2',
    title: 'Greek Yogurt Parfait',
    category: 'breakfast',
    calories: 280,
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    description: 'Layered Greek yogurt with berries and granola',
    prepTime: 5,
    tags: ['healthy', 'quick', 'vegetarian']
  },
  {
    id: '3',
    title: 'Pancakes with Maple Syrup',
    category: 'breakfast',
    calories: 520,
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    description: 'Fluffy buttermilk pancakes with real maple syrup',
    prepTime: 20,
    tags: ['sweet', 'classic']
  },
  {
    id: '4',
    title: 'Smoothie Bowl',
    category: 'breakfast',
    calories: 350,
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
    description: 'Acai smoothie bowl topped with fresh fruits and nuts',
    prepTime: 10,
    tags: ['healthy', 'vegan', 'colorful']
  },
  {
    id: '5',
    title: 'Eggs Benedict',
    category: 'breakfast',
    calories: 680,
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop',
    description: 'Classic eggs benedict with hollandaise sauce',
    prepTime: 25,
    tags: ['luxury', 'protein']
  },
  {
    id: '6',
    title: 'Overnight Oats',
    category: 'breakfast',
    calories: 320,
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1574168608572-d4d10c272b99?w=400&h=300&fit=crop',
    description: 'Creamy overnight oats with chia seeds and berries',
    prepTime: 5,
    tags: ['healthy', 'make-ahead', 'fiber']
  },
  {
    id: '7',
    title: 'French Toast',
    category: 'breakfast',
    calories: 480,
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop',
    description: 'Thick-cut brioche French toast with cinnamon',
    prepTime: 15,
    tags: ['sweet', 'indulgent']
  },
  {
    id: '8',
    title: 'Breakfast Burrito',
    category: 'breakfast',
    calories: 550,
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    description: 'Scrambled eggs, cheese, and veggies in a warm tortilla',
    prepTime: 20,
    tags: ['hearty', 'protein', 'filling']
  },
  {
    id: '9',
    title: 'Chia Pudding',
    category: 'breakfast',
    calories: 250,
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    description: 'Vanilla chia pudding with coconut milk and mango',
    prepTime: 5,
    tags: ['vegan', 'superfood', 'light']
  },
  {
    id: '10',
    title: 'Bagel with Lox',
    category: 'breakfast',
    calories: 620,
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop',
    description: 'Everything bagel with cream cheese and smoked salmon',
    prepTime: 10,
    tags: ['luxury', 'protein', 'savory']
  },
  {
    id: '11',
    title: 'Waffles with Berries',
    category: 'breakfast',
    calories: 450,
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
    description: 'Belgian waffles topped with fresh seasonal berries',
    prepTime: 15,
    tags: ['sweet', 'fresh', 'seasonal']
  },
  {
    id: '12',
    title: 'Green Smoothie',
    category: 'breakfast',
    calories: 220,
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    description: 'Spinach, banana, apple and ginger smoothie',
    prepTime: 5,
    tags: ['healthy', 'detox', 'energy']
  },

  // Lunch Items (35 items)
  {
    id: '13',
    title: 'Caesar Salad',
    category: 'lunch',
    calories: 380,
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    prepTime: 10,
    tags: ['classic', 'light', 'vegetarian']
  },
  {
    id: '14',
    title: 'Grilled Chicken Sandwich',
    category: 'lunch',
    calories: 520,
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop',
    description: 'Grilled chicken breast with avocado and bacon',
    prepTime: 15,
    tags: ['protein', 'hearty', 'popular']
  },
  {
    id: '15',
    title: 'Quinoa Buddha Bowl',
    category: 'lunch',
    calories: 420,
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Quinoa with roasted vegetables and tahini dressing',
    prepTime: 20,
    tags: ['healthy', 'vegan', 'colorful']
  },
  {
    id: '16',
    title: 'Fish Tacos',
    category: 'lunch',
    calories: 480,
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Grilled fish with cabbage slaw and cilantro lime',
    prepTime: 25,
    tags: ['fresh', 'seafood', 'spicy']
  },
  {
    id: '17',
    title: 'Poke Bowl',
    category: 'lunch',
    calories: 450,
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    description: 'Fresh tuna poke with rice and vegetables',
    prepTime: 15,
    tags: ['fresh', 'protein', 'asian']
  },
  {
    id: '18',
    title: 'Mushroom Risotto',
    category: 'lunch',
    calories: 520,
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
    description: 'Creamy arborio rice with wild mushrooms',
    prepTime: 30,
    tags: ['comfort', 'vegetarian', 'creamy']
  },
  {
    id: '19',
    title: 'Turkey Club',
    category: 'lunch',
    calories: 580,
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1619740230270-1153a8c078c9?w=400&h=300&fit=crop',
    description: 'Triple-decker sandwich with turkey, bacon, and lettuce',
    prepTime: 10,
    tags: ['classic', 'hearty', 'protein']
  },
  {
    id: '20',
    title: 'Mediterranean Wrap',
    category: 'lunch',
    calories: 420,
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    description: 'Hummus, vegetables, and feta in a whole wheat wrap',
    prepTime: 8,
    tags: ['healthy', 'vegetarian', 'mediterranean']
  },

  // Dinner Items (35+ items)
  {
    id: '21',
    title: 'Grilled Salmon',
    category: 'dinner',
    calories: 680,
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    description: 'Atlantic salmon with roasted asparagus and lemon',
    prepTime: 25,
    tags: ['healthy', 'seafood', 'omega-3']
  },
  {
    id: '22',
    title: 'Beef Steak',
    category: 'dinner',
    calories: 750,
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
    description: 'Grass-fed ribeye steak with garlic mashed potatoes',
    prepTime: 30,
    tags: ['premium', 'protein', 'indulgent']
  },
  {
    id: '23',
    title: 'Chicken Parmesan',
    category: 'dinner',
    calories: 620,
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop',
    description: 'Breaded chicken breast with marinara and mozzarella',
    prepTime: 35,
    tags: ['comfort', 'italian', 'cheese']
  },
  {
    id: '24',
    title: 'Vegetarian Pasta',
    category: 'dinner',
    calories: 520,
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    description: 'Penne pasta with seasonal vegetables and herbs',
    prepTime: 20,
    tags: ['vegetarian', 'italian', 'comfort']
  },
  {
    id: '25',
    title: 'Thai Curry',
    category: 'dinner',
    calories: 580,
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
    description: 'Red curry with vegetables and jasmine rice',
    prepTime: 25,
    tags: ['spicy', 'asian', 'coconut']
  },

  // Additional meals to reach 100+
  {
    id: '26',
    title: 'Acai Bowl',
    category: 'breakfast',
    calories: 340,
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop',
    description: 'Acai blend with granola and tropical fruits',
    prepTime: 8,
    tags: ['superfood', 'antioxidants', 'tropical']
  },
  {
    id: '27',
    title: 'Breakfast Quesadilla',
    category: 'breakfast',
    calories: 470,
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Eggs, cheese, and peppers in a crispy tortilla',
    prepTime: 12,
    tags: ['mexican', 'cheesy', 'satisfying']
  },
  {
    id: '28',
    title: 'Caprese Salad',
    category: 'lunch',
    calories: 320,
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop',
    description: 'Fresh mozzarella, tomatoes, and basil with balsamic',
    prepTime: 5,
    tags: ['fresh', 'italian', 'light']
  },
  {
    id: '29',
    title: 'BBQ Pulled Pork',
    category: 'dinner',
    calories: 650,
    price: 23.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    description: 'Slow-cooked pulled pork with coleslaw',
    prepTime: 45,
    tags: ['bbq', 'comfort', 'smoky']
  },
  {
    id: '30',
    title: 'Sushi Platter',
    category: 'dinner',
    calories: 480,
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    description: 'Assorted sushi rolls with wasabi and ginger',
    prepTime: 20,
    tags: ['japanese', 'fresh', 'artisan']
  }
  // ... Continue with more meals to reach 100+ total
];

// Generate additional meals programmatically to reach 100+
const generateAdditionalMeals = (): Meal[] => {
  const additionalMeals: Meal[] = [];
  const categories: Array<'breakfast' | 'lunch' | 'dinner'> = ['breakfast', 'lunch', 'dinner'];
  const mealTemplates = [
    { name: 'Healthy Bowl', base: 'Bowl with quinoa and vegetables' },
    { name: 'Protein Plate', base: 'High-protein meal with sides' },
    { name: 'Comfort Food', base: 'Hearty comfort meal' },
    { name: 'Light Bite', base: 'Light and nutritious option' },
    { name: 'Fusion Dish', base: 'Creative fusion cuisine' }
  ];

  for (let i = 31; i <= 120; i++) {
    const category = categories[i % 3];
    const template = mealTemplates[i % mealTemplates.length];
    
    additionalMeals.push({
      id: i.toString(),
      title: `${template.name} ${i - 30}`,
      category,
      calories: 300 + (i * 7) % 400,
      price: Math.floor(8.99 + (i * 3) % 25),
      image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=300&fit=crop`,
      description: template.base,
      prepTime: 10 + (i * 3) % 30,
      tags: ['fresh', 'seasonal']
    });
  }

  return additionalMeals;
};

export const allMeals: Meal[] = [...sampleMeals, ...generateAdditionalMeals()];