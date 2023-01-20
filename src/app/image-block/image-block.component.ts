import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageBlockComponent {

  imageSrc: string = '';

   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required])
  });


  get f(){
    return this.myForm.controls;
  }


  constructor(
    public dialogRef: MatDialogRef<ImageBlockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) {}

  ngOnInit(){
    //this.color ='';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileChange(event : any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
        this.data = reader.result as string;
            
      };
   
    }
  }

  


}
