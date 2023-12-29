import { UsersRepository } from "./users.repositoty.js";


import { sessionDao } from "../dao/factory.js";


export const usersDaoService = new UsersManager(sessionDao);