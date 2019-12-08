export class EnvironmentConst {
  public static islocal = true;

  // local url for developers
  public static local = 'https://randomuser.me/api';

  // production url for development, url to be used
  public static production = 'https://randomuser.me/api';

  public static ENDPOINT = EnvironmentConst.islocal ? EnvironmentConst.local : EnvironmentConst.production;
}
