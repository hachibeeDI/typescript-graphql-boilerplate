import {ConnectionOptions} from 'typeorm';

declare module "ormconfig" {
  const option: ConnectionOptions;
  export default option;
}
