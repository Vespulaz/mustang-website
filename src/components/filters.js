import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Filter = () => {
    const filterOptions = {
        'Loại món': [
            { value: 'mon-viet', label: 'Món Việt' },
            { value: 'mon-a', label: 'Món Á' },
            { value: 'mon-au', label: 'Món Âu' }
        ],
        'Giá tiền': [
            { value: '0-50', label: 'Dưới 50k' },
            { value: '50-100', label: '50k - 100k' },
            { value: '100-200', label: '100k - 200k' },
            { value: '200+', label: 'Trên 200k' }
        ],
        'Đánh giá': [
            { value: '5', label: '5 sao' },
            { value: '4', label: '4 sao trở lên' },
            { value: '3', label: '3 sao trở lên' }
        ],
        'Khoảng cách': [
            { value: '0-1', label: 'Dưới 1km' },
            { value: '1-3', label: '1km - 3km' },
            { value: '3-5', label: '3km - 5km' },
            { value: '5+', label: 'Trên 5km' }
        ]
    };

    return (
        <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(filterOptions).map(([filterName, options]) => (
                <Select key={filterName}>
                    <SelectTrigger className="w-[180px] border border-gray-200 focus:ring-2 focus:ring-[#FF4500] focus:border-transparent bg-white">
                        <SelectValue placeholder={filterName} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ))}
        </div>
    );
};

export default Filter;