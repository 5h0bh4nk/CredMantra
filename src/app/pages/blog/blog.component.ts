import { Component } from '@angular/core';

export interface Blog {
  description: string;
  image: string;
  link: string;
  left: boolean;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  blogs: Blog[] = [
    {
      description: 'HOW TO SAVE AND INVEST MONEY SMARTLY TO GET BETTER PROFIT.',
      image: '../../../assets/blogex1.png',
      link: 'https://www.credmantra.com/blog/how-to-save-and-invest-money-smartly-to-get-better-profit',
      left: true
    },
    {
      description: 'HOW TO SAVE AND INVEST MONEY SMARTLY TO GET BETTER PROFIT.',
      image: '../../../assets/blogex2.png',
      link: 'https://www.credmantra.com/blog/how-to-save-and-invest-money-smartly-to-get-better-profit',
      left: false
    }
  ];
}
