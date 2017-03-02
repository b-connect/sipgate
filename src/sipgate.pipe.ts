import {Injectable, PipeTransform, Pipe} from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'SipgatePipe'
})
@Injectable()
export class SipgatePipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
