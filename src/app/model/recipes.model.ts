import { Title } from '@angular/platform-browser';

export interface Recipe {
    id: string;
    title: string;
    imageUrl?: string;
    ingredients: string[];
}