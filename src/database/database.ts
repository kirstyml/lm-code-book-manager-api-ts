import { Dialect, Sequelize } from "sequelize";
export let sequelize = new Sequelize("sqlite::memory:");
if (process.env.NODE_ENV !== 'test') {
    const connString = `${process.env.DB_DIALECT ?? 'postgres'}://${process.env.DB_USERNAME ?? 'MISSING_DB_USERNAME_CONFIG'}:${process.env.DB_PASSWORD ?? 'MISSING_DB_PASSWORD_CONFIG'}@${process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG'}/${process.env.DB_NAME ?? 'MISSING_DB_NAME_CONFIG'}`;
    sequelize = new Sequelize(connString);
}
