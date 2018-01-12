import envs from '../constants/envs';

const ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = ENV === envs.development;
const IS_PRODUCTION = ENV === envs.production;

export {
    IS_DEVELOPMENT,
    IS_PRODUCTION,
};

export default ENV;
