import YamlParse from '../model/YamlParse'
// import 'reflect-metadata'

export function Value (param: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = YamlParse.Instance.getValue(param)
  }
}
