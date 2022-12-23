import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cardData = [
    {
      cardNumber: 1,
      url: "https://www.youtube.com/embed/4WvwX18oMR4?autoplay=1",
    },
    {
      cardNumber: 2,
      url: "https://www.youtube.com/embed/zifGp5KTBKg?autoplay=1",
    },
    {
      cardNumber: 3,
      url: "https://www.youtube.com/embed/EMUQ0GnPVVE?autoplay=1",
    },
    {
      cardNumber: 4,
      url: "https://www.youtube.com/embed/sE3uRRFVsmc?autoplay=1",
    },
    {
      cardNumber: 5,
      url: "https://www.youtube.com/embed/FOVCtUdaMCU?autoplay=1",
    },
    {
      cardNumber: 6,
      url: "https://www.youtube.com/embed/GfZPtkqXQIA?autoplay=1",
    },
    {
      cardNumber: 7,
      url: "https://www.youtube.com/embed/N6p6LRtQ2WY?autoplay=1",
    },
    {
      cardNumber: 8,
      url: "https://www.youtube.com/embed/5ytnReUSyrU?autoplay=1",
    },
    {
      cardNumber: 9,
      url: "https://www.youtube.com/embed/A4zBSnMhvI0?autoplay=1",
    },
    {
      cardNumber: 10,
      url: "https://www.youtube.com/embed/Vj0wzAaqzss?autoplay=1",
    },
    {
      cardNumber: 11,
      url: "https://www.youtube.com/embed/U5uRQ84kBRA?autoplay=1",
    },
    {
      cardNumber: 12,
      url: "https://www.youtube.com/embed/2Y8a2VmvXCE?autoplay=1",
    },
    {
      cardNumber: 13,
      url: "https://www.youtube.com/embed/g-UbKW4XJsE?autoplay=1",
    },
    {
      cardNumber: 14,
      url: "https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=1",
    },
    {
      cardNumber: 15,
      url: "https://www.youtube.com/embed/sZSu0sgtA68?autoplay=1",
    },
    {
      cardNumber: 16,
      url: "https://www.youtube.com/embed/wuYR2zDB0bE?autoplay=1",
    },
    {
      cardNumber: 17,
      url: "https://www.youtube.com/embed/Bo0w_mA5CJc?autoplay=1",
    },
    {
      cardNumber: 18,
      url: "https://www.youtube.com/embed/qUCNAnp2QAI?autoplay=1",
    },
    {
      cardNumber: 19,
      url: "https://www.youtube.com/embed/7LD9LfW8m4M?autoplay=1",
    },
    {
      cardNumber: 20,
      url: "https://www.youtube.com/embed/cLC70ax28-0?autoplay=1",
    },
    {
      cardNumber: 21,
      url: "https://www.youtube.com/embed/5_o65q1y60M?autoplay=1",
    },
    {
      cardNumber: 22,
      url: "https://www.youtube.com/embed/7Ypo_6MEIj0?autoplay=1",
    },
    {
      cardNumber: 23,
      url: "https://www.youtube.com/embed/hwacxSnc4tI?autoplay=1",
    },
    {
      cardNumber: 24,
      url: "https://www.youtube.com/embed/jDdSQlCbJ90?autoplay=1",
    },
    {
      cardNumber: 25,
      url: "https://www.youtube.com/embed/1oThvaBcAEY?autoplay=1",
    },
  ];
  data = [];

  get cardData() {
    return this._cardData;
  }
}
