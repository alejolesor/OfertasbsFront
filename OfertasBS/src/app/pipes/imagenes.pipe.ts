import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform( thumbnail: any ): any {

    console.log(thumbnail)

    let url = thumbnail.path
    let ext = thumbnail.extension

    return url  + "." + ext;
  }

}
