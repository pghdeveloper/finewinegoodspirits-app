import GetRepository from "./GetRepository";

const repositories = {
    winespirits: GetRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};