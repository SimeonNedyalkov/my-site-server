declare function databaseConfig(): Promise<void>;
declare const config: {
    databaseConfig: typeof databaseConfig;
};
export default config;
