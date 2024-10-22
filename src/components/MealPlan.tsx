import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface Meal {
  id: number;
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

const initialMeals: Meal[] = [
  { id: 1, day: 'Monday', breakfast: 'Oatmeal', lunch: 'Salad', dinner: 'Grilled Chicken' },
  { id: 2, day: 'Tuesday', breakfast: 'Eggs', lunch: 'Sandwich', dinner: 'Fish Curry' },
];

function MealPlan() {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [newMeal, setNewMeal] = useState<Omit<Meal, 'id'>>({ day: '', breakfast: '', lunch: '', dinner: '' });

  const addMeal = () => {
    if (newMeal.day && newMeal.breakfast && newMeal.lunch && newMeal.dinner) {
      setMeals([...meals, { ...newMeal, id: meals.length + 1 }]);
      setNewMeal({ day: '', breakfast: '', lunch: '', dinner: '' });
    }
  };

  return (
    <div className="card-3d">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Meal Plan</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Day</th>
              <th className="p-2 text-left">Breakfast</th>
              <th className="p-2 text-left">Lunch</th>
              <th className="p-2 text-left">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
                <td className="p-2">{meal.day}</td>
                <td className="p-2">{meal.breakfast}</td>
                <td className="p-2">{meal.lunch}</td>
                <td className="p-2">{meal.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-500">Add New Meal</h3>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Day"
            className="input-3d"
            value={newMeal.day}
            onChange={(e) => setNewMeal({ ...newMeal, day: e.target.value })}
          />
          <input
            type="text"
            placeholder="Breakfast"
            className="input-3d"
            value={newMeal.breakfast}
            onChange={(e) => setNewMeal({ ...newMeal, breakfast: e.target.value })}
          />
          <input
            type="text"
            placeholder="Lunch"
            className="input-3d"
            value={newMeal.lunch}
            onChange={(e) => setNewMeal({ ...newMeal, lunch: e.target.value })}
          />
          <input
            type="text"
            placeholder="Dinner"
            className="input-3d"
            value={newMeal.dinner}
            onChange={(e) => setNewMeal({ ...newMeal, dinner: e.target.value })}
          />
          <button
            className="btn-3d bg-blue-500 text-white"
            onClick={addMeal}
          >
            <Plus size={18} className="mr-1 inline" /> Add Meal
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealPlan;