import { Component, OnInit } from "@angular/core";
import { Recipe } from "../model/recipes.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "0",
      title: "Suppe",
      ingredients: ["Wasser", "Brühe", "Gemüse", "Hünchen"],
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.SSWuBdj5zoMfNfTGUYLLzAHaFF&pid=Api"
    },
    {
      id: "1",
      title: "Salat",
      ingredients: [
        "Eisbergsalat",
        "Zwiebeln",
        "Gurke",
        "Paprika",
        "Tomate",
        "Salz",
        "Pfeffer",
        "Öl",
        "Essig"
      ],
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.L9dYm0w_aEff17pziw6AvQHaFp&pid=Api"
    },
    {
      id: "2",
      title: "Schnitzel",
      ingredients: [
        "Kalbfreisch",
        "Eier",
        "Semmelbrösel",
        "Mehl",
        "Salz",
        "Pfeffer"
      ],
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.Im8--M9JVQO5-3cgWA1kVQHaE7&pid=Api"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
