import Model, {attr} from '@ember-data/model';

export default class Metric extends Model{
  @attr('string') name;
  @attr('string') description;
}
