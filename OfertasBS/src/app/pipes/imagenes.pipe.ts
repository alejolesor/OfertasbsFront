import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform( thumbnail: any ): any {

    console.log(thumbnail)

    let url = "http://10.39.1.164:9093/api/Image/"
    

    return url  + thumbnail;
  }

}
