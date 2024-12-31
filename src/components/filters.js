'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FilterSelect = ({ label, options, value, onChange }) => {
    return (
        <div className="flex items-center gap-4 mb-4">
            <label className="w-24 text-right text-gray-600">{label}:</label>
            <div className="relative w-full max-w-xs">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none rounded-md border border-gray-300 px-4 py-2 pr-8 focus:border-orange-500 focus:outline-none"
                >
                    <option value="">All</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
        </div>
    );
};

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        foodType: '',
        budget: '',
        rate: '',
        distance: '',
    });

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const foodTypes = [
        { value: 'vietnamese', label: 'Vietnamese' },
        { value: 'streetfood', label: 'Street Food' },
        { value: 'fastfood', label: 'Fast Food' },
        { value: 'restaurant', label: 'Restaurant' },
    ];

    const budgets = [
        { value: '0-50000', label: '0đ - 50,000đ' },
        { value: '50000-100000', label: '50,000đ - 100,000đ' },
        { value: '100000-200000', label: '100,000đ - 200,000đ' },
        { value: '200000+', label: '200,000đ+' },
    ];

    const rates = [
        { value: '5', label: '5 stars' },
        { value: '4', label: '4 stars & up' },
        { value: '3', label: '3 stars & up' },
    ];

    const distances = [
        { value: '1', label: 'Within 1km' },
        { value: '3', label: 'Within 3km' },
        { value: '5', label: 'Within 5km' },
        { value: '10', label: 'Within 10km' },
    ];

    return (
        <div className="bg-orange-500 p-6">
            <div className="mx-auto max-w-3xl">
                <FilterSelect
                    label="Food type"
                    options={foodTypes}
                    value={filters.foodType}
                    onChange={(value) => handleFilterChange('foodType', value)}
                />
                <FilterSelect
                    label="Budget"
                    options={budgets}
                    value={filters.budget}
                    onChange={(value) => handleFilterChange('budget', value)}
                />
                <FilterSelect
                    label="Rate"
                    options={rates}
                    value={filters.rate}
                    onChange={(value) => handleFilterChange('rate', value)}
                />
                <FilterSelect
                    label="Distance"
                    options={distances}
                    value={filters.distance}
                    onChange={(value) => handleFilterChange('distance', value)}
                />
            </div>
        </div>
    );
};

export default Filters;