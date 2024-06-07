import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'svgIcon',
})
export class SvgIconPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(
    iconId: string,
    custom?: any,
    returnText?: boolean,
    args?: any
  ): any {
    if (!iconId) return null;
    const _style = custom ? custom['style'] : null;
    const _cls = custom ? custom['class'] : null;
    const _text = `<svg ${
      _style
        ? 'style="' +
          JSON.stringify(_style)
            .replace(/\"|{|}/g, '')
            .replace(/,/g, ';') +
          '"'
        : ''
    } class="${_cls || ''}"><use xlink:href="#${iconId}"></use></svg>`;
    return returnText ? _text : this.sanitizer.bypassSecurityTrustHtml(_text);
  }
}
