import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component ,ElementRef,Inject, Renderer2, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageBlockComponent } from './image-block/image-block.component';
import { SetBackgroundDialogComponent } from './set-background-dialog/set-background-dialog.component';

 class Div {
  id :number | undefined;
  type : string | undefined;
  fileImageSrc: string = '';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tp_angular';
  divId = 0 ;
  divs :Div[] = [];

  @ViewChild('componentboundary', { static: true })
  container!: ElementRef;

  constructor(public dialog: MatDialog ,  @Inject(DOCUMENT) public document: Document , private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    
  }

  backgroundColor = '#f5f5dc';

  openDialog() {
    const dialogRef = this.dialog.open(SetBackgroundDialogComponent,{data : {color : this.backgroundColor}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.backgroundColor = result;

    });
  }

  openNav(){
    this.document.getElementById("mySidenav")!.style.width = "250px";
  }

  closeNav(){
    this.document.getElementById("mySidenav")!.style.width = "0";
  }

  newImage(){
    const div = new Div();
    div.id = this.divId ++ ; 
    div.type = "image";
    this.divs.push(div);
  }

  newVideo(){
    const div = new Div();
    div.id = this.divId ++ ; 
    div.type = "video";
    this.divs.push(div);
    
  }
  
  openImageUploadDialog(div:Div){
     
    const dialogRef = this.dialog.open(ImageBlockComponent,{data : {file :div.fileImageSrc }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      div.fileImageSrc = result;
 
    });

  }
  
  deleteDiv(div:Div){
    this.divs.forEach( (item, index) => {
      if(item === div) this.divs.splice(index,1);
    });
  }


  
}
