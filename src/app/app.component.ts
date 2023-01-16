import { Component } from '@angular/core';
import { TreeNode } from './interfaces/tree-node';

interface MyTreeNode extends TreeNode {
  name: string;
  description?: string;
  image?: string;
  children: MyTreeNode[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'OrgChart';

  


  tree: MyTreeNode = {
    name: 'College Of Engineering',
    image: 'assets/chart-images/1.png',
    description: 'a science That uses and applies scientific principles to implementtation of facilities',
    // onClick: () => alert('Death to dogs'),
    children: [
      {
        name: 'Architecture',
        image: 'assets/chart-images/2.png',
        description: 'The art of creating volumes and spaces dedicated to embracing activities',
        children: [
          {
            name: 'Urban Planning',
            image: 'assets/chart-images/5.png',
            // description: '',
            children: []
          },
          {
            name: 'Interior Design',
            image: 'assets/chart-images/6.png',
            // description: '',
            children: []
          },
          {
            name: 'Exterior Design',
            image: 'assets/chart-images/7.png',
            // description: '',
            children: []
          }
        ]
      },
      {
        name: 'Civil Engineering',
        image: 'assets/chart-images/3.png',
        description: 'Studing designing and analyzing various civil facilities',
        children: [
          {
            name: 'Roads and Bridges',
            image: 'assets/chart-images/8.png',
            // description: '',
            children: []
          },
          {
            name: 'Construction',
            image: 'assets/chart-images/9.png',
            // description: '',
            children: []
          }
        ]
      },
        {
          name: 'Mechanical Engineering',
          image: 'assets/chart-images/4.png',
          description: 'it is concerned with design, manufacture, operation of machinery',
          children: [],
          // onClick: () => console.log('Google chrome stole some RAM')
        }
      ]
    };
  
  constructor(){
      
  }
}
