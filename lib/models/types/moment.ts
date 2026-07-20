import warehouse from 'warehouse';
import { moment } from '../../plugins/helper/date';

// It'll pollute the moment module.
// declare module 'moment' {
//   export default interface Moment extends moment.Moment {
//     _d: Date;
//   // eslint-disable-next-line semi
//   }
// }

class SchemaTypeMoment extends warehouse.SchemaType<moment.Moment> {
  public options: any;

  constructor(name, options = {}) {
    super(name, options);
  }

  cast(value?, data?) {
      throw new Error("STUB");
  }

  validate(value, data?) {
      throw new Error("STUB");
  }

  match(value, query, _data?) {
    return value ? value.valueOf() === query.valueOf() : false;
  }

  compare(a?, b?) {
      throw new Error("STUB");
  }

  parse(value?) {
      throw new Error("STUB");
  }

  value(value?, _data?) {
    // FIXME: Same as above. Also a dirty hack.
    return value ? value._d.toISOString() : value;
  }

  q$day(value, query, _data?) {
      throw new Error("STUB");
  }

  q$month(value, query, _data?) {
      throw new Error("STUB");
  }

  q$year(value, query, _data?) {
      throw new Error("STUB");
  }

  u$inc(value, update, _data?) {
      throw new Error("STUB");
  }

  u$dec(value, update, _data?) {
      throw new Error("STUB");
  }
}

function toMoment(value) {
    throw new Error("STUB");
}

export = SchemaTypeMoment;
